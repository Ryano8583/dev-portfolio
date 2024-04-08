<script setup lang="ts">
const props = defineProps<{
  /** Value for "name" property of route link */
  to: string;
}>();

function select(event: KeyboardEvent | any) {
  event.target?.click();
}
</script>

<template>
  <li class="list-none">
    <RouterLink
      :to="{ name: props.to }"
      class="p-2 rounded-md motion-safe:transition-colors motion-safe:duration-400 hover:bg-gray-200 hover:shadow-full focus-visible:outline-offset-4 dark:hover:bg-zinc-500 dark:hover:shadow-none"
      activeClass="bg-blue-800 shadow-full text-gray-50 hover:text-zinc-900 dark:bg-blue-200 dark:shadow-none dark:text-gray-900 dark:hover:text-zinc-50"
      @keydown.space.prevent="select"
    >
      <slot />
    </RouterLink>
  </li>
</template>
