<template>
  <div id="about">
    <Table title="Personal details" v-bind:items="personal"></Table>
    <Table title="Education" v-bind:items="education"></Table>
    <Table title="Work experience" v-bind:items="workExperience"></Table>
    <Table title="Experience" v-bind:items="experience"></Table>
    <Table title="Awards" v-bind:items="awards"></Table>
    <Table title="Certificates" v-bind:items="certificates"></Table>
    <Table title="Skills" v-bind:items="skills"></Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
import Table from '../components/Table.vue';

import personal from '../assets/data/personal.json';
import education from '../assets/data/education.json';
import workExperience from '../assets/data/work-experience.json';
import experience from '../assets/data/experience.json';
import awards from '../assets/data/awards.json';
// import certificates from './../assets/data/certificates.json';
import skills from '../assets/data/skills.json';

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const state = reactive({
      personal,
      education,
      workExperience,
      experience,
      awards,
      // certificates,
      skills,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang='scss'>
#about {
  position: absolute;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: auto;
  justify-content: center;
  display: grid;
  text-align: center;
}
</style>
