<script setup lang="ts">
defineProps<{
  /** Green background */
  useGreen?: boolean;
  /** Red background */
  useRed?: boolean;
}>();
</script>

<template>
  <button
    class="p-2 text-gray-50 dark:text-gray-900 rounded-md"
    :class="
      useGreen
        ? 'bg-emerald-600 dark:bg-emerald-200'
        : useRed
          ? 'bg-red-600 dark:bg-red-200'
          : 'bg-zinc-800 dark:bg-zinc-200'
    "
  >
    <slot />
  </button>
</template>
