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
      <div class="description" v-if="elements.sectionDescription" v-html="elements.sectionDescription"></div>
      <component :is="elements.name" :data="elements.data" :sideBySide="elements.sideBySide"/>
    </div>
  </section>
</template>

<script>
  import FeatureList from './FeatureList.vue';
  import HeaderAndText from './HeaderAndText.vue';
  import HoverCard from './HoverCard.vue';
  import IconAndText from './IconAndText.vue';
  import ImageAndText from './ImageAndText.vue';
  import ImageStory from './ImageStory.vue';
  import Rating from './Rating.vue';

  export default {
    components: {
      FeatureList,
      HeaderAndText,
      HoverCard,
      IconAndText,
      ImageAndText,
      ImageStory,
      Rating,
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
    margin-top: 0;
  }

  .hasImage {
    color: white;
  }

  .content {
    max-width: $bp-large-desktops;
    margin: 0 auto;
    padding: 3rem 2rem;

    .description {
      margin-bottom: 1.6rem;
      line-height: 1.6;
    }

    &.hasHeader {
      padding-top: 0;
    }
  }

  .limitedWidth {
    max-width: $bp-large-desktops;
    margin: 0 auto;
  }
</style>
