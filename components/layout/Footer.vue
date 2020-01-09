<template>
  <footer :style="{background: $filters.hexToRgba(colors.darker.bg, 0.3), borderColor: colors.darker.bg}">
    <span>&copy; 2019 - {{new Date().getFullYear()}} by {{projectName}}</span>
    <span v-if="imprint && imprint.id">
      <nuxt-link :to="'/' + imprint.slug" :style="{color: colors.darker.bg}">{{imprint.translations[0].nav_title}}</nuxt-link>
    </span>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'colors',
        'projectName',
        'imprint',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  footer {
    padding: 1rem;
    border-top: 1px solid;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
