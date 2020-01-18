<template>
  <section>
    <style>
      article summary ul,
      article summary ol {
        margin: 1rem 0 1rem 2rem;
      }
    </style>
    <article v-for="element in data" :class="element.image_position">
      <h3>
        <span>
          {{element.translations[0].title}}
        </span>
        <span v-if="element.more_link" class="moreLink">
          <a :href="element.more_link" target="_blank" rel="nofollow noreferrer noopener" :style="{color: colors.original.bg}" v-if="!element.more_link_internal">{{element.translations[0].more_link_text}} &raquo;</a>
          <nuxt-link class="link" :to="localePath({ name: 'slug', params: { slug: element.more_link } })" :style="{color: colors.original.bg}" v-if="element.more_link_internal">{{element.translations[0].more_link_text}} &raquo;</nuxt-link>
        </span>
      </h3>
      <img class="image" :src="element.image.data.full_url" :class="'radius-' + element.border_radius" :alt="element.translations[0].title"/>
      <div class="summary">
        <summary v-html="element.translations[0].text"/>
      </div>
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
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
  h3 {
    margin-top: 0;
    grid-area: header;

    display: flex;
    align-items: center;

    .moreLink {
      flex: 1;
      text-align: right;
      font-size: 0.9rem;
    }
  }

  article {
    display: grid;
    grid-template-areas: 'header' 'image' 'content';
    margin: 2rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    .image {
      grid-area: image;
      margin: 0 auto 1rem auto;
      width: 80%;

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

    .summary {
      grid-area: content;
      -ms-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;

      line-height: 1.6;
    }
  }

  @media only screen and (min-width: $bp-ls-phones) {
    article {
      .image {
        width: 60%;
      }
    }
  }

  @media only screen and (min-width: $bp-tablets) {
    article {
      grid-template-areas: 'image header' 'image content';
      grid-column-gap: 1rem;
      grid-template-rows: auto 1fr;

      &.right {
        grid-template-areas: 'header image' 'content image';

        h3 {
          text-align: right;
        }

        .summary {
          text-align: right;
        }
      }

      .image {
        width: 30vw;
        max-width: 400px;
      }
    }
  }
</style>
