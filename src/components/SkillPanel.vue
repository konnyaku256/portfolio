<template>
  <div class="flex items-center space-x-4">
    <div class="flex-shrink-0">
      <a v-bind:href="skill.link">
        <img v-bind:src="skill.icon" loading="lazy" class="w-8 h-8" />
      </a>
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-left text-base font-semibold text-gray-900 dark:text-white">
        {{ skill.name }}
      </p>
      <p class="text-left text-sm text-gray-500 dark:text-gray-400">
        {{ skill.description }}
      </p>
    </div>
    <ul class="pt-2 pb-2 mb-3">
      <li
        v-for="tag in skill.tags"
        v-bind:key="tag"
        class="md:inline-block bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium rounded px-3 py-1 mt-2 mr-2 mb-2"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Skill {
  level: string;
  icon: string;
  name: string;
  link: string;
  description: string;
  tags: string[];
  startDate: string;
}

export default defineComponent({
  props: {
    skill: {
      type: Object as PropType<Skill>
    }
  }
});
</script>
