<template>
  <section :class="{sideBySide}">
    <article v-for="element in data">
      <h3>{{element.translations[0].header}}</h3>
      <summary>{{element.translations[0].text}}</summary>
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

  summary {
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    text-align: justify;
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
