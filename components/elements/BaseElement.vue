<template>
  <section :style="{
    backgroundColor: elements.bgColor,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: elements.bgImage ? `linear-gradient(to bottom, rgba(0,0,0,${elements.overlayOpacity}), rgba(0,0,0,${elements.overlayOpacity})), url(${elements.bgImage})` : undefined,
    backgroundAttachment: elements.parallaxImage ? 'fixed' : false
  }" :class="{hasImage: !!elements.bgImage, limitedWidth: !elements.fullWidth, spaceAfter: elements.spaceAfter, spaceBefore: elements.spaceBefore}">
    <h2 v-if="elements.sectionHeader" :style="{color: elements.bgImage ? 'white' : colors.dark.bg}">{{elements.sectionHeader}}</h2>
    <div class="content" :class="{hasHeader: elements.sectionHeader}">
      <component :is="elements.name" :data="elements.data" :sideBySide="elements.sideBySide"/>
    </div>
  </section>
</template>

<script>
  import HeaderAndText from './HeaderAndText.vue';
  import HoverCard from './HoverCard.vue';
  import IconAndText from './IconAndText.vue';
  import ImageAndText from './ImageAndText.vue';

  export default {
    components: {
      HeaderAndText,
      HoverCard,
      IconAndText,
      ImageAndText,
    },
    computed: {
      colors () {
        return this.$store.getters.colors;
      },
    },
    props: ['elements'],
  };
</script>

<style lang="scss" scoped>
  section.spaceBefore {
    margin-top: 2rem;
  }

  section.spaceAfter {
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }

  .hasImage {
    color: white;
  }

  .content {
    max-width: $bp-large-desktops;
    margin: 0 auto;
    padding: 3rem 2rem;

    &.hasHeader {
      padding-top: 0;
    }
  }

  .limitedWidth {
    max-width: $bp-large-desktops;
    margin: 0 auto;
  }
</style>
