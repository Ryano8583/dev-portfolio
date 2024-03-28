<script setup lang="ts">
import { FontAwesomeIcon } from "../../composables/faLibrary";

defineProps<{
  /** Value of the text for the <h3> */
  heading: string;
  /** Use the "circle-info" Font Awesome icon */
  useIcon?: boolean;
}>();
</script>

<template>
  <aside>
    <div
      class="my-4 mx-auto p-3 w-11/12 border-[1px] border-transparent rounded-md bg-gray-100 shadow-full dark:border-white dark:bg-zinc-600 dark:shadow-none sm:w-2/3"
    >
      <FontAwesomeIcon
        v-if="useIcon"
        icon="circle-info"
        class="float-left mr-4 w-12 h-12 rounded-[2rem] bg-gray-600 shadow-full text-amber-400 dark:shadow-none dark:bg-none dark:text-amber-200"
      />
      <h3 class="text-xl text-[#353535] dark:text-zinc-50">{{ heading }}</h3>
      <slot />
    </div>
  </aside>
</template>
