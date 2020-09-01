<template>
  <div class="box">
    <img v-bind:src="item.thumb" loading="lazy" />
    <div class="content">
      <div class="content-text">
        <h3>{{ item.name }}</h3>
        <div>{{ item.description }}</div>
        <div>{{ item.tool }}</div>
        <div>{{ item.date }}</div>
      </div>
    </div>
    <a v-bind:href="item.link"></a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

interface Item {
  name: string;
  link: string;
  thumb: string;
  description: string;
  tool: string;
  date: string;
}

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Item>
    }
  }
})
</script>

<style lang="scss">
.box {
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
