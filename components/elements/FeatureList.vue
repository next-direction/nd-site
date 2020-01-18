<template>
  <section :class="{sideBySide}">
    <style>
      article summary ul,
      article summary ol {
        margin: 1rem 0 1rem 2rem;
        line-height: 1.6;
      }
    </style>
    <article v-for="element in data">
      <h3>{{element.translations[0] ? element.translations[0].title : 'Missing translation'}}</h3>
      <summary v-html="element.translations[0] ? element.translations[0].list : 'Missing translation'"/>
    </article>
  </section>
</template>

<script>
  export default {
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
  h3 {
    margin: 0 0 0.8rem 0;
  }

  article:not(:first-child) {
    h3 {
      margin-top: 2rem;
    }
  }

  .sideBySide {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.4rem;

    article:not(:first-child) {
      h3 {
        margin-top: 0;
      }
    }
  }
</style>
