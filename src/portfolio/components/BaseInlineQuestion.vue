<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "../../composables/faLibrary";

import BaseButton from "@/components/BaseButton.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";

const isExpanded = ref(false);

function toggle() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <aside
    class="flex gap-3 sm:gap-5 my-4 mx-auto p-3 w-auto border-[1px] border-transparent rounded-md bg-gray-100 shadow-full dark:border-white dark:bg-zinc-600 dark:shadow-none sm:w-2/3"
  >
    <FontAwesomeIcon
      icon="circle-question"
      class="my-4 w-12 h-12 text-gray-500 dark:text-zinc-400 sm:mx-4"
    />
    <LayoutColumn class="my-4 w-full">
      <slot name="question" />
      <BaseButton class="mt-4 w-fit" :aria-expanded="isExpanded" @click="toggle"
        >{{ isExpanded ? "Hide" : "Reveal" }} Answer</BaseButton
      >
      <div class="mt-4" :class="isExpanded ? '' : 'invisible hidden'">
        <slot name="answer" />
      </div>
    </LayoutColumn>
  </aside>
</template>
