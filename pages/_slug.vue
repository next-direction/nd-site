<template>
  <Page :data="pageData"/>
</template>

<script>
  import Page from '~/components/layout/Page.vue';

  export default {
    async asyncData ({ params, store }) {
      const indexPage = await fetch(store.getters.baseUrl + '/items/page?fields=*.*&lang=de&filter[slug][eq]=' + params.slug).then(res => res.json());
      const pageData = indexPage.data[0];

      return {
        pageData,
      };
    },
    components: {
      Page,
    },
  };
</script>

<style>
</style>
