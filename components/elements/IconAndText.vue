<template>
  <section :class="{sideBySide}">
    <article v-for="element in data" :class="element.icon_position">
      <i class="material-icons" :class="element.icon_position">{{element.icon}}</i>
      <summary v-html="element.translations[0].text"/>
    </article>
  </section>
</template>

<script>
  export default {
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
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

    summary {
      -ms-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
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
      }
    }

    &.leftmiddle {
      i.material-icons {
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

      summary {
        text-align: right;
        margin-right: 2rem;
      }
    }
  }
</style>
