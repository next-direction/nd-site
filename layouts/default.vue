<template>
  <div class="site-container">
    <Header/>
    <main>
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '~/components/layout/Footer.vue';
  import Header from '~/components/layout/Header.vue';

  export default {
    components: {
      Footer,
      Header,
    },
    computed: {
      color () {
        return this.$store.getters.projectColor;
      },
    },
  };
</script>

<style lang="scss">
  div.site-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    width: 100%;
    padding: 2rem;
    max-width: $bp-desktops;
    margin: 0 auto;
  }
</style>
