import tinycolor from 'tinycolor2';

export const state = () => ({
  baseUrl: '',
  menuPages: [],
  menuOpen: false,
  parentPages: [],
  projectInfo: {},
  imprint: {},
});

export const getters = {
  baseUrl: state => state.baseUrl,
  colors: state => {
    const darker = tinycolor(state.projectInfo.project_color).darken(tinycolor(state.projectInfo.project_color).isLight() ? 20 : 10).toString();
    const dark = tinycolor(state.projectInfo.project_color).darken(tinycolor(state.projectInfo.project_color).isLight() ? 12 : 5).toString();
    const original = state.projectInfo.project_color;
    const bright = tinycolor(state.projectInfo.project_color).lighten(tinycolor(state.projectInfo.project_color).isLight() ? 10 : 15).toString();
    const brighter = tinycolor(state.projectInfo.project_color).lighten(tinycolor(state.projectInfo.project_color).isLight() ? 20 : 30).toString();

    return {
      darker: {
        bg: darker,
        text: tinycolor(darker).isLight() ? '#000000' : '#FFFFFF',
      },
      dark: {
        bg: dark,
        text: tinycolor(dark).isLight() ? '#000000' : '#FFFFFF',
      },
      original: {
        bg: original,
        text: tinycolor(original).isLight() ? '#000000' : '#FFFFFF',
      },
      bright: {
        bg: bright,
        text: tinycolor(bright).isLight() ? '#000000' : '#FFFFFF',
      },
      brighter: {
        bg: brighter,
        text: tinycolor(brighter).isLight() ? '#000000' : '#FFFFFF',
      },
    };
  },
  imprint: state => state.imprint,
  projectLogo: state => state.projectInfo.project_logo.full_url,
  projectName: state => state.projectInfo.project_name,
};

export const mutations = {
  setBaseUrl (state, url) {
    state.baseUrl = url;
  },
  setImprint (state, imprint) {
    state.imprint = imprint;
  },
  setMenuPages (state, pages) {
    state.menuPages = pages.map(page => {
      return {
        ...page,
        nav_title: page.translations[0] ? page.translations[0].nav_title : 'Nav title missing',
      };
    });

    const parentRelations = [];

    pages.forEach(page => {
      parentRelations[page.id] = page.parent ? page.parent.id : 0;
    });

    state.parentPages = parentRelations;
  },
  setMenuOpen (state, open) {
    state.menuOpen = open;
  },
  setProjectInfo (state, info) {
    state.projectInfo = info;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, { app, env, store }) {
    commit('setBaseUrl', env.baseUrl);

    const [projectInfo, menuPages, imprint] = await Promise.all([
      fetch(store.getters.baseUrl + '/').then(res => res.json()),
      fetch(`${store.getters.baseUrl}/items/page?status=published&sort=-is_index,parent,sort&lang=${app.i18n.locale}&fields=id,slug,parent,translations.nav_title&filter[is_imprint][empty]`).then(res => res.json()),
      fetch(`${store.getters.baseUrl}/items/page?status=published&lang=${app.i18n.locale}&fields=id,slug,parent,translations.nav_title&filter[is_imprint][eq]=1`).then(res => res.json()),
    ]);

    commit('setProjectInfo', projectInfo.data.api);
    commit('setMenuPages', menuPages.data);
    commit('setImprint', imprint.data[0]);
  },
};
