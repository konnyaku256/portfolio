<template>
  <div
    class="p-4 m-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center justify-between mt-2 mb-2">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        <Star5 v-if="level === 5" />
        <Star4 v-else-if="level === 4" />
        <Star3 v-else-if="level === 3" />
        <Star2 v-else-if="level === 2" />
        <Star1 v-if="level === 1" />
      </h5>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <template v-for="skill in skills" v-bind:key="skill.name">
          <li v-if="level === skill.level" class="py-3 sm:py-4">
            <SkillPanel v-bind:skill="skill" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import Star5 from "./stars/star5.vue";
import Star4 from "./stars/star4.vue";
import Star3 from "./stars/star3.vue";
import Star2 from "./stars/star2.vue";
import Star1 from "./stars/star1.vue";
import SkillPanel from "./SkillPanel.vue";
import skills from "../assets/data/skills.json";

export default defineComponent({
  components: {
    Star5,
    Star4,
    Star3,
    Star2,
    Star1,
    SkillPanel
  },
  props: {
    level: Number
  },
  setup() {
    const state = reactive({
      skills
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
