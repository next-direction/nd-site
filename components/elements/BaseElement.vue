<template>
  <section :style="{
    backgroundColor: elements.bgColor,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundImage: elements.bgImage ? 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(' + elements.bgImage + ')' : undefined,
    backgroundAttachment: elements.parallaxImage ? 'fixed' : false
  }" :class="{hasImage: !!elements.bgImage, limitedWidth: !elements.fullWidth}">
    <div class="content" :class="{spaceBefore: elements.spaceBefore}">
      <component :is="elements.name" :data="elements.data" :sideBySide="elements.sideBySide"/>
    </div>
  </section>
</template>

<script>
  import HeaderAndText from './HeaderAndText.vue';
  import IconAndText from './IconAndText.vue';

  export default {
    components: {
      HeaderAndText,
      IconAndText,
    },
    props: ['elements'],
  };
</script>

<style lang="scss" scoped>
  .hasImage {
    color: white;
  }

  .content {
    max-width: $bp-large-desktops;
    margin: 0 auto;
    padding: 3rem 2rem;

    &.spaceBefore {
      margin-top: 2rem;
    }
  }

  .limitedWidth {
    max-width: $bp-large-desktops;
    margin: 0 auto;
  }
</style>
