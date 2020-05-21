<template>
  <div class="products">
    <Box v-for="product in products" v-bind:items="product" v-bind:key="product"></Box>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Box from "@/components/Box.vue";
import products from "@/assets/data/products.json";

@Component({
  components: {
    Box
  }
})
export default class Projects extends Vue {
  private products = products;
}
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
