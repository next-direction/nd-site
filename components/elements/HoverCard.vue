<template>
  <section>
    <article v-for="element in data" @mouseover.stop="addHovered(element.id)" @mouseleave="removeHovered(element.id)">
      <div class="top" :style="{
        background: hovered.includes(element.id) ? (element.color ? element.color : colors.original.bg) : '#333333',
        color: hovered.includes(element.id) ? (element.color ? (tinycolor(element.color).isLight() ? 'black' : 'white') : colors.original.text) : 'white'
      }">
        <i class="material-icons">{{element.icon}}</i>
        <h3 v-if="element.title">{{element.title}}</h3>
      </div>
      <div class="bottom" :style="{borderColor: hovered.includes(element.id) ? (element.color ? element.color : colors.original.bg) : '#333333'}">
        <p>
          {{element.text}}
        </p>
        <a :href="element.read_more_link" target="_blank" rel="nofollow noreferrer noopener" v-if="element.read_more_link"
           :style="{color: element.color
           ? (tinycolor(element.color).isLight() ? tinycolor(element.color).darken(20).toString() : element.color)
           : (tinycolor(colors.original.bg).isLight() ? tinycolor(colors.original.bg).darken(20) : colors.original.bg)}">Read
          more</a>
      </div>
    </article>
  </section>
</template>

<script>
  import tinycolor from 'tinycolor2';

  export default {
    computed: {
      colors () {
        return this.$store.getters.colors;
      },
      tinycolor () {
        return tinycolor;
      },
    },
    data () {
      return {
        hovered: [],
      };
    },
    methods: {
      addHovered (id) {
        if (!this.hovered.includes(id)) {
          this.hovered.push(id);
        }
      },
      removeHovered (id) {
        if (this.hovered.includes(id)) {
          this.hovered = this.hovered.filter(storedId => storedId !== id);
        }
      },
    },
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-column-gap: 2rem;
    justify-content: center;

    article {
      height: 16rem;
      position: relative;

      .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        transform: translateY(4rem);
        z-index: 1;
        background: #333;
        height: 8rem;
        transition: all 0.3s ease;

        i.material-icons {
          font-size: 3.4rem;
        }

        h3 {
          margin: 1rem 0 0 0;
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: white;
        position: relative;
        transform: translateY(-4rem);
        height: 8rem;
        transition: all 0.3s ease;
        border: 1px solid;
        border-top: 0;

        padding: 0.6rem;

        a {
          display: block;
          width: 100%;
          margin-top: 0.4rem;
        }
      }

      &:hover {
        .top {
          transform: translateY(0);
        }

        .bottom {
          transform: translateY(0);
        }
      }
    }
  }
</style>
