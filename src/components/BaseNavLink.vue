<script setup lang="ts">
const props = defineProps<{
  /** Value for "name" property of route link */
  to: string;
}>();
</script>

<template>
  <li class="list-none">
    <RouterLink
      :to="{ name: props.to }"
      class="p-2 rounded-md hover:bg-gray-200 hover:shadow-full dark:hover:bg-zinc-500 dark:hover:shadow-none"
      activeClass="bg-blue-800 shadow-full text-gray-50 hover:text-zinc-900 dark:bg-blue-200 dark:shadow-none dark:text-gray-900 dark:hover:text-zinc-50"
    >
      <slot />
    </RouterLink>
  </li>
</template>
