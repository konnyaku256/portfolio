<template>
  <div id="skills">
    <h3 class="font-bold text-lg lg:text-xl mb-2">Skills</h3>
    <SkillCard v-bind:level="5" />
    <SkillCard v-bind:level="4" />
    <SkillCard v-bind:level="3" />
    <SkillCard v-bind:level="2" />
    <SkillCard v-bind:level="1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillCard from "./SkillCard.vue";

export default defineComponent({
  components: {
    SkillCard
  }
});
</script>
