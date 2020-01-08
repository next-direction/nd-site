<template>
  <nav :class="{open}">
    <MenuItems :parentItem="0"/>
  </nav>
</template>

<script>
  import MenuItems from '~/components/layout/Menu/MenuItems.vue';

  export default {
    components: {
      MenuItems,
    },
    computed: {
      open () {
        return this.$store.state.menuOpen;
      },
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    position: absolute;
    right: 0;
    top: 54px;
    background: white;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
    text-align: left;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: all 0.4s ease;

    &.open {
      max-height: 100000px;
      padding: 1.6rem;
      opacity: 1;
    }
  }
</style>
