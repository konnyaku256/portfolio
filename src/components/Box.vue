<template>
  <div class='box'>
    <img v-bind:src="items.thumb">
    <div class="content">
    <h3>{{ items.name }}</h3>
    <div>{{ items.description }}</div>
    <div>{{ items.tool }}</div>
    <div>{{ items.date }}</div>
    </div>
    <a v-bind:href="items.link"></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Box extends Vue {
  @Prop() private items!: any[];
}
</script>

<style lang="scss">
.box {
  position: relative;
  margin: 10px;
  width: 300px;
  height: 300px;
  background-color: #ECF0F1;
  img {
    max-width: 100%;
    height: auto;
  }
  .content {
    position: absolute;
    bottom: 0;
    width: 100%;
	  height: auto;
    background-color: #ECF0F1;
    padding: 0 0 20px 0;
  }
  &:hover .content{
    background-color: #1ABC9C;
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
