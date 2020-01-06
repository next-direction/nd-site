<template>
  <section class="page">
    <h1 :style="{color: colors.darker.bg}" class="page-title" v-if="t.page_title">
      {{t.page_title}}
    </h1>
    <h2 :style="{color: colors.original.bg}" class="page-subtitle" v-if="t.sub_title">
      {{t.sub_title}}
    </h2>
    <div class="page-description" v-if="t.description" v-html="t.description"></div>
  </section>
</template>

<script>
  export default {
    computed: {
      colors () {
        return this.$store.getters.colors;
      },
    },
    data () {
      return {
        meta: this.data,
        elements: this.data.elements,
        t: this.data.translations[0],
      };
    },
    head () {
      return {
        title: this.t.nav_title + ' | ' + this.$store.getters.projectName,
      };
    },
    props: ['data'],
  };
</script>

<style lang="scss" scoped>
  .page-title {
    margin-bottom: 2rem;
  }

  .page-subtitle {
    margin-bottom: 3rem;
  }

  .page-description {
    font-size: 1.4rem;
  }
</style>
