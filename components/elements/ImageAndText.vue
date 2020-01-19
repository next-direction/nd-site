<template>
  <section :class="{sideBySide}">
    <article v-for="element in data" :class="element.image_position">
      <div class="image" :style="{backgroundImage: 'url(' + element.image.data.full_url + ')'}" :class="[element.image_position, 'radius-' + element.border_radius]"/>
      <summary>
        <h3>{{element.translations[0].title}}</h3>
        <div v-html="element.translations[0].text" ref="content"></div>
      </summary>
    </article>
  </section>
</template>

<script>
  export default {
    computed: {
      colors () {
        return this.$store.getters.colors;
      },
    },
    mounted () {
      this.$refs.content.forEach(element => {
        const links = Array.prototype.slice.call(element.getElementsByTagName('a'));

        links.forEach(link => {
          link.style.color = this.colors.original.bg;
          link.setAttribute('rel', 'nofollow noreferrer noopener');
        });
      });
    },
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
  h3 {
    margin-top: 0;
  }

  .sideBySide {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;

    article {
      padding: 0;
    }
  }

  article {
    display: flex;
    padding: 2rem 0;

    &:first-child {
      padding-top: 0;
    }

    i.material-icons {
      font-size: 4rem;
    }

    .image {
      flex: 0 0 6rem;
      height: 6rem;
      width: 6rem;
      background-size: cover;
      background-position: center center;

      &.radius-small {
        border-radius: 0.4rem;
      }

      &.radius-big {
        border-radius: 1.2rem;
      }

      &.radius-circle {
        border-radius: 50%;
      }
    }

    summary {
      div {
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        line-height: 1.6;
      }
    }

    &.lefttop {
      summary {
        margin-left: 2rem;
      }
    }

    &.top {
      flex-direction: column;

      i.material-icons {
        align-self: center;
      }

      summary {
        text-align: justify;
        margin-top: 1rem;

        h3 {
          text-align: center;
        }
      }

      .image {
        align-self: center;
      }
    }

    &.leftmiddle {
      i.material-icons {
        align-self: center;
      }

      .image {
        align-self: center;
      }

      summary {
        margin-left: 2rem;
      }
    }

    &.righttop {
      flex-direction: row-reverse;

      summary {
        text-align: right;
        margin-right: 2rem;
      }
    }

    &.rightmiddle {
      flex-direction: row-reverse;

      i.material-icons {
        align-self: center;
      }

      .image {
        align-self: center;
      }

      summary {
        text-align: right;
        margin-right: 2rem;
      }
    }
  }
</style>
