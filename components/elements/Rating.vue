<template>
  <section :class="{sideBySide}">
    <article v-for="element in data">
      <h3 v-if="element.title">{{element.title}}</h3>
      <summary v-if="element.text">{{element.text}}</summary>
      <div class="rating">
        <div class="stars">
          <i class="material-icons" v-for="n in 10" :style="{color: n <= element.rating ? '#FFD700' : ''}">{{n <= element.rating ? 'star' : 'star_border'}}</i>
        </div>
        <div class="scale" :class="{single: data.length === 1}">
          <span class="lowerText">{{element.lower_text}}</span>
          <span class="upperText">{{element.upper_text}}</span>
        </div>
      </div>

    </article>
  </section>
</template>

<script>
  export default {
    props: ['data', 'sideBySide'],
  };
</script>

<style lang="scss" scoped>
  section {
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    article {
      display: flex;
      flex-direction: column;
      border: 1px solid;

      .rating {
        margin: 1rem 0;
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;

        .stars {
          width: 50%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        i.material-icons {
          &:first-of-type {
            margin-left: 1rem;
          }

          &:last-of-type {
            margin-right: 1rem;
          }
        }

        .scale {
          display: flex;
          justify-content: center;
          margin-top: 0.6rem;

          .lowerText {
            flex: 1;
            text-align: left;
            padding-left: 2rem;

            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .upperText {
            flex: 1;
            text-align: right;
            padding-right: 2rem;

            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          @media only screen and (min-width: $bp-ls-phones) {
            &.single {
              .lowerText {
                justify-content: center;
              }

              .upperText {
                justify-content: center;
              }
            }
          }
        }
      }
    }

    &.sideBySide {
      max-width: initial;
      margin: 0;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      grid-gap: 2rem;
    }

    h3 {
      margin: 0;
      padding: 0.4rem;
      border-bottom: 1px solid;
    }

    summary {
      padding: 0.4rem;
      border-left: 0.4rem solid;
      margin: 1rem 0 0 0;
    }
  }
</style>
