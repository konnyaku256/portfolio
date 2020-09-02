<template>
  <div class="product-card">
    <img v-bind:src="product.thumb" loading="lazy" />
    <div class="content">
      <div class="content-text">
        <h3>{{ product.name }}</h3>
        <div>{{ product.description }}</div>
        <div>{{ product.tool }}</div>
        <div>{{ product.date }}</div>
      </div>
    </div>
    <a v-bind:href="product.link"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface Product {
  name: string;
  link: string;
  thumb: string;
  description: string;
  tool: string;
  date: string;
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
  position: relative;
  margin: 10px;
  width: 350px;
  height: 350px;
  background-color: #ecf0f1;
  img {
    width: 100%;
    height: 175px;
  }
  .content {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 175px;
    background-color: #ecf0f1;
    .content-text {
      padding: 10px 0 0 0;
    }
  }
  &:hover .content {
    background-color: #1abc9c;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
