<template>
  <div class="box">
    <img v-bind:src="items.thumb" loading="lazy" />
    <div class="content">
      <div class="content-text">
        <h3>{{ items.name }}</h3>
        <div>{{ items.description }}</div>
        <div>{{ items.tool }}</div>
        <div>{{ items.date }}</div>
      </div>
    </div>
    <a v-bind:href="items.link"></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Box extends Vue {
  @Prop() private items!: any[];
}
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
