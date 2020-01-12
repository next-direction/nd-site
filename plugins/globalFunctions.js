import { toCamelCase, toUpperCamelCase } from '~/plugins/filters';

export default ({ app }, inject) => {
  inject('toCamelCase', toCamelCase);
  inject('toUpperCamelCase', toUpperCamelCase);
}

export const getPage = async (store, filter) => {
  const indexPage = await fetch(`${store.getters.baseUrl}/items/page?fields=*.*,elements.*,elements.bg_image.data.full_url,elements.element.*&lang=de&${filter}`).then(res => res.json());
  const pageData = indexPage.data[0];
  const elements = [];

  pageData.elements.forEach(({ element, max_items }) => {
    let url = `${store.getters.baseUrl}/items/${element.collection}?fields=*.*&lang=de&filter[page][eq]=${pageData.id}`;

    if (max_items) {
      url += `&limit=${max_items}`;
    }

    elements.push(fetch(url).then(res => res.json()));
  });

  const results = await Promise.all(elements);
  const elementData = [];

  pageData.elements.forEach(({
    element,
    bg_color: bgColor,
    bg_image,
    bg_full_width,
    side_by_side: sideBySide,
    space_after: spaceAfter,
    space_before: spaceBefore,
    parallax_image: parallaxImage,
    overlay_opacity: overlayOpacity,
    section_header: sectionHeader,
  }, index) => {
    elementData.push({
      name: toUpperCamelCase(element.collection),
      data: results[index].data,
      bgColor,
      bgImage: bg_image ? bg_image.data.full_url : undefined,
      fullWidth: !!bg_full_width,
      sideBySide,
      spaceAfter,
      spaceBefore,
      parallaxImage,
      overlayOpacity,
      sectionHeader,
    });
  });

  return {
    pageData,
    elementData,
  };
};
