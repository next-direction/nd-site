<template>
  <section class="page">
    <div class="intro">
      <h1 :style="{color: colors.darker.bg, borderColor: $filters.hexToRgba(colors.original.bg, 0.8)}" class="page-title" v-if="t.page_title">
        {{t.page_title}}
      </h1>
      <h2 :style="{color: colors.original.bg, background: $filters.hexToRgba(colors.darker.bg, 0.2)}" class="page-subtitle" v-if="t.sub_title">
        {{t.sub_title}}
      </h2>
      <div class="page-description" v-if="t.description" v-html="t.description"></div>
    </div>
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
        elements: this.data ? this.data.elements : [],
        t: this.data && this.data.translations[0] ? this.data.translations[0] : {},
      };
    },
    head () {
      return {
        title: (this.t.nav_title ? this.t.nav_title + ' | ' : '') + this.$store.getters.projectName,
      };
    },
    props: ['data'],
  };
</script>

<style lang="scss" scoped>

  .page-title {
    margin-bottom: 2rem;
    display: inline;
    border-bottom: 3px solid;
  }

  .page-subtitle {
    border-left: 0.4rem solid;
    border-bottom: 0.1rem solid;
    padding: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin: 2rem 0 2rem 2rem;
  }

  .page-description {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  .intro {
    max-width: $bp-large-desktops;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
