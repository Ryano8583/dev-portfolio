<script setup lang="ts">
defineProps<{
  /** Use the version of the time line where the containers alternate sides along the line */
  useAlternating?: boolean;
}>();
</script>

<template>
  <div
    class="relative after:absolute after:top-0 after:bottom-0 after:left-1 after:w-2 after:bg-zinc-600 after:dark:bg-zinc-200"
    :class="{ 'sm:after:left-1/2': useAlternating }"
  >
    <slot />
  </div>
</template>
