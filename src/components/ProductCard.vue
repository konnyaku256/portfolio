<template>
  <div
    class="product-card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a v-bind:href="product.link">
      <img v-bind:src="product.thumb" loading="lazy" class="rounded-t-lg w-full" />
    </a>
    <div class="p-5">
      <a v-bind:href="product.link">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ product.name }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ product.description }}
      </p>
      <ul class="pt-2 pb-2 mb-3">
        <li
          v-for="tag in product.tags"
          v-bind:key="tag"
          class="inline-block bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium rounded px-3 py-1 mr-2 mb-2"
        >
          {{ tag }}
        </li>
      </ul>
      <span
        class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-3 py-1 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
      >
        <svg
          aria-hidden="true"
          class="w-3 h-3 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {{ product.date }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

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
      type: Object as PropType<Product>
    }
  }
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
