<template>
  <div class="product-card">
    <img v-bind:src="product.thumb" loading="lazy" />
    <div class="card-content">
      <div class="card-title">
        {{ product.name }}
      </div>
      <div class="card-subtitle">
        {{ product.description }}
      </div>
      <div class="card-tool">
        <div>{{ product.tool }}</div>
      </div>
      <div class="card-date">
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
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba($color: #000000, $alpha: 0.2);
  transition: 0.2s;
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 175px;
  }
  .card-content {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 175px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .card-title {
      align-items: center;
      font-size: 22px;
      font-weight: bold;
      padding: 16px;
    }
    .card-subtitle {
      align-items: center;
      padding: 16px;
      margin-top: -32px;
    }
    .card-tool {
      align-items: center;
      margin-top: -16px;
      padding: 16px;
    }
    .card-date {
      align-items: center;
      padding: 16px;
      position: absolute;
      bottom: 0px;
    }
  }
  &:hover {
    box-shadow: 0 10px 20px 0 rgba($color: #000000, $alpha: 0.2);
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
