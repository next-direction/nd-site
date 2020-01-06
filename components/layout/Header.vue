<template>
  <header :style="{borderColor: colors.darker.bg}">
    <section class="logo">
      <img :src="projectLogo"/>
    </section>
    <section class="name" :style="{color: colors.darker.bg}">
      {{projectName}}
    </section>
    <section class="menu">
      <button class="hamburger">
        <span class="bar" :style="{background: colors.darker.bg}"></span>
        <span class="bar" :style="{background: colors.darker.bg}"></span>
        <span class="bar" :style="{background: colors.darker.bg}"></span>
      </button>
    </section>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'colors',
        'projectLogo',
        'projectName',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .2);

    section.logo {
      display: flex;
      align-items: center;
      height: 80%;
      margin-left: 1rem;

      img {
        height: 80%;
      }
    }

    section.name {
      margin-left: 1rem;
      font-size: 1.8rem;
    }

    section.menu {
      flex: 1;
      text-align: right;
      margin-right: 1rem;

      button.hamburger {
        width: 40px;
        background: none;
        border: none;
        cursor: pointer;

        .bar {
          display: block;
          height: 5px;

          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

</style>
