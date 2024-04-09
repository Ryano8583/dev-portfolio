<script setup lang="ts">
defineProps<{
  /** Blue background */
  useBlue?: boolean;
  /** Red background */
  useRed?: boolean;
}>();
</script>

<template>
  <button
    class="p-2 text-gray-50 dark:text-gray-900 rounded-md shadow-md transition hover:shadow-lg hover:translate-x-[-1px] hover:translate-y-[-1px] focus-visible:outline-offset-4"
    :class="
      useBlue
        ? 'bg-blue-800 dark:bg-blue-200'
        : useRed
          ? 'bg-red-800 dark:bg-red-200'
          : 'bg-zinc-800 dark:bg-zinc-200'
    "
  >
    <slot />
  </button>
</template>
