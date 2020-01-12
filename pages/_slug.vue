<template>
  <div>
    <Page :data="pageData"/>
    <BaseElement v-for="elements in elementData" :key="elements.id" :elements="elements" v-if="elements.data && elements.data.length"/>
  </div>
</template>

<script>
  import { getPage } from '~/plugins/globalFunctions';

  import BaseElement from '~/components/elements/BaseElement.vue';
  import Page from '~/components/layout/Page.vue';

  export default {
    async asyncData ({ app, params, store }) {
      return await getPage(app, store, 'filter[slug][eq]=' + params.slug);
    },
    components: {
      BaseElement,
      Page,
    },
  };
</script>

<style>
</style>
