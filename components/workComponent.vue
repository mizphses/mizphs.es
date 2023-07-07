<template>
  <div class="works__wrap">
    <h3>新型コロナワクチン予診票ジェネレータ</h3>
    <div class="works__inde">
    <div class="works__inde__left">
      <slot />
    </div>
    <div class="works__inde__right" v-html="props.pageText">
    </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  pageText: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>

.works{
    &__wrap{
      border: 1px solid #000;
      border-radius: 5px;
      padding: 10px;
      margin: 10px 0;
    }
    &__inde{
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 10px;
      @media (max-width: 800px) {
        grid-template-columns: 1fr;
      }
      &__left{
        border-right: 3px solid #555;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 800px) {
          border-right: none;
        }
      }
      &__right{
        height: 200px;
        background: #fff;
      }
    }
  }
</style>