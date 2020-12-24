<template>
  <div id="products">
    <section class="m-4 lg:m-16">
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        <li v-for="product in products" v-bind:key="product.name" class="p-4 flex justify-center flex-wrap">
          <ProductCard v-bind:product="product" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
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
  height: calc(100vh - 50px * 2);
  overflow: auto;
}
</style>
