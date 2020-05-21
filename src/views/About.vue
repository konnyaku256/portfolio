<template>
  <div class="about">
    <Table title="Personal Details" v-bind:items="personal"></Table>
    <Table title="Education" v-bind:items="education"></Table>
    <Table title="Experience" v-bind:items="experience"></Table>
    <Table title="Skills" v-bind:items="skills"></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from "@/components/Table.vue";

import personal from "@/assets/data/personal.json";
import education from "@/assets/data/education.json";
import experience from "@/assets/data/experience.json";
import skills from "@/assets/data/skills.json";

@Component({
  components: {
    Table
  }
})
export default class About extends Vue {
  private personal = personal;
  private education = education;
  private experience = experience;
  private skills = skills;
}
</script>

<style lang='scss'>
.about {
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: auto;
  justify-content: center;
  display: grid;
}
</style>
