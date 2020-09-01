<template>
  <div class="products">
    <Box v-for="product in products" v-bind:item="product" v-bind:key="product"></Box>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "@vue/composition-api";
import Box from "@/components/Box.vue";
import products from "@/assets/data/products.json";

export default defineComponent({
  components: {
    Box
  },
  setup() {
    const state = reactive({
       products: products
    });
    return {
      ...toRefs(state),
    };
  }
})
</script>

<style lang='scss'>
.products {
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
