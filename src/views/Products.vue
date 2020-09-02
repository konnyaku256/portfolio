<template>
  <div id="products">
    <ProductCard v-for="product in products"
      v-bind:product="product"
      v-bind:key="product">
    </ProductCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from '@vue/composition-api';
import ProductCard from '@/components/ProductCard.vue';
import products from '@/assets/data/products.json';

export default defineComponent({
  components: {
    ProductCard,
  },
  setup() {
    const state = reactive({
      products,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang='scss'>
#products {
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
