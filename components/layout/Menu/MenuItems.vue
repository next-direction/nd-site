<template>
  <ul v-if="items.length">
    <template v-for="(item, index) in items">
      <li :class="{firstItem: index === 0 && level === 0}"
          :style="{backgroundColor: hovered.includes(item.id) ? $filters.hexToRgba(colors.original.bg, 0.1) : ''}">
        <nuxt-link class="link" :to="'/' + (item.slug !== 'home' ? item.slug : '')" :style="{color: colors.dark.bg, borderColor: colors.original.bg}"
                   @mouseover.native.stop="addHovered(item.id)" @mouseleave.native="removeHovered(item.id)" @click.native="itemClicked">
          <span class="spacer" v-for="n in level"></span>
          <span class="title">{{ item.nav_title }}</span>
          <span class="opener" v-if="hasSubItems(item.id)" @click.stop.prevent="toggleSubItems(item.id)" :style="{backgroundColor: $filters.hexToRgba(colors.original.bg, 0.2)}">
            <span class="opener-icon" v-if="!showSubItems.includes(item.id)"><i class="material-icons">add</i></span>
            <span class="opener-icon" v-else><i class="material-icons">remove</i></span>
          </span>
        </nuxt-link>
        <MenuItems class="child-list" :parentItem="item.id" :level="level + 1" v-if="showSubItems.includes(item.id)"/>
      </li>
    </template>
  </ul>
</template>

<script>
  export default {
    computed: {
      colors () {
        return this.$store.getters.colors;
      },
      items () {
        const pages = this.$store.state.menuPages;
        const parentMapping = this.$store.state.parentPages;

        return pages.filter(page => +parentMapping[page.id] === +this.parentItem);
      },
    },
    created () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'setMenuOpen') {
          if (!state.menuOpen) {
            this.hovered = [];
          }
        }
      });
    },
    data () {
      return {
        showSubItems: [],
        hovered: [],
      };
    },
    methods: {
      addHovered (id) {
        if (!this.hovered.includes(id)) {
          this.hovered.push(id);
        }
      },
      hasSubItems (id) {
        const pages = this.$store.state.menuPages;
        const parentMapping = this.$store.state.parentPages;

        return pages.find(page => +parentMapping[page.id] === +id);
      },
      itemClicked () {
        this.$store.commit('setMenuOpen', false);
      },
      toggleSubItems (id) {
        if (this.showSubItems.includes(id)) {
          this.showSubItems = this.showSubItems.filter(storedId => storedId !== id);
        } else {
          this.showSubItems.push(id);
        }
      },
      removeHovered (id) {
        if (this.hovered.includes(id)) {
          this.hovered = this.hovered.filter(storedId => storedId !== id);
        }
      },
    },
    name: 'MenuItems',
    props: {
      level: {
        type: Number,
        default: 0,
      },
      parentItem: Number,
    },
  };
</script>

<style lang="scss" scoped>

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      background-color: white;

      &.firstItem {
        a {
          border-top: 1px solid blue;
        }
      }

      a {
        display: flex;
        justify-content: flex-end;

        width: 100%;
        text-decoration: none;
        border-bottom: 1px solid blue;
        padding-left: 2rem;

        .spacer {
          padding-left: 1rem;
        }

        .title {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .opener {
          justify-self: flex-end;
          display: flex;
          justify-content: center;
          align-items: center;

          &-icon {
            display: flex;
            align-items: center;
          }
        }

        &.nuxt-link-exact-active {
          font-weight: bold;
        }

        .opener {
          width: 5.4rem;
          font-weight: bold;
          font-size: 1.6rem;
        }

        font-size: 2rem;
        height: 5.6rem;

        .title {
          padding: 1.6rem 0;
          padding-right: 6rem;
        }

        @media only screen and (min-width: $bp-ls-phones) {
          font-size: 1.7rem;
          height: 5rem;

          .title {
            padding: 1.4rem 0;
            padding-right: 5.5rem;
          }
        }

        @media only screen and (min-width: $bp-tablets) {
          font-size: 1.4rem;
          height: 4.4rem;

          .title {
            padding: 1.3rem 0;
            padding-right: 5.2rem;
          }

          .opener {
            width: 4.6rem;
          }
        }

        @media only screen and (min-width: $bp-desktops) {
          font-size: 1.3rem;

          .title {
            padding: 1.2rem 0;
            padding-right: 5.2rem;
          }
        }

        @media only screen and (min-width: $bp-large-desktops) {
          font-size: 1.1rem;
          height: 3.6rem;

          .title {
            padding: 1rem 0;
            padding-right: 5.2rem;
          }

          .opener {
            width: 3.8rem;
          }
        }

        @media only screen and (min-width: $bp-huge-desktops) {
          font-size: 0.9rem;
          height: 3rem;

          .title {
            padding: 0.8rem 0;
            padding-right: 5.2rem;
          }

          .opener {
            width: 3.2rem;
          }
        }
      }
    }
  }
</style>
