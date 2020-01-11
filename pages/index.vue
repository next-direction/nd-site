<template>
  <div>
    <Page :data="pageData"/>
    <BaseElement v-for="elements in elementData" :key="elements.id" :elements="elements" v-if="elements.data.length"/>
  </div>
</template>

<script>
  import BaseElement from '~/components/elements/BaseElement.vue';
  import Page from '~/components/layout/Page.vue';

  export default {
    async asyncData ({ app, store }) {
      const indexPage = await fetch(store.getters.baseUrl + '/items/page?fields=*.*,elements.*,elements.bg_image.data.full_url,elements.element.*&lang=de&filter[is_index][nempty]').then(res => res.json());
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

      pageData.elements.forEach(({ element, bg_color: bgColor, bg_image, bg_full_width, side_by_side: sideBySide, space_before: spaceBefore, parallax_image: parallaxImage }, index) => {
        elementData.push({
          name: app.$toUpperCamelCase(element.collection),
          data: results[index].data,
          bgColor,
          bgImage: bg_image ? bg_image.data.full_url : undefined,
          fullWidth: !!bg_full_width,
          sideBySide,
          spaceBefore,
          parallaxImage,
        });
      });

      return {
        pageData,
        elementData,
      };
    },
    components: {
      BaseElement,
      Page,
    },
  };
</script>

<style>
</style>
