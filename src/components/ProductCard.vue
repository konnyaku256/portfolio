<template>
  <div class="product-card w-full max-w-sm rounded overflow-hidden shadow-lg">
    <a v-bind:href="product.link" class="block w-full h-full">
      <picture>
        <img v-bind:src="product.thumb" loading="lazy" class="w-full" />
      </picture>
      <section class="px-3 py-2 lg:px-6 lg:py-4">
        <h3 class="font-bold text-lg lg:text-xl mb-2">
          {{ product.name }}
        </h3>
        <p class="text-sm lg:text-base">
          {{ product.description }}
        </p>
      </section>
      <ul class="p-3 lg:px-6 lg:py-4">
        <li v-for="tag in product.tags" v-bind:key="tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm lg:text-base font-semibold text-gray-700 mr-2 mb-2">
          {{ tag }}
        </li>
      </ul>
      <section class="px-3 py-2 lg:px-6 lg:py-4">
        <p class="text-sm lg:text-base">
          {{ product.date }}
        </p>
      </section>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Product {
  name: string;
  link: string;
  thumb: string;
  description: string;
  tags: string[];
}

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
});
</script>

<style lang="scss">
.product-card {
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 100%;
    height: 175px;
  }
}
</style>
