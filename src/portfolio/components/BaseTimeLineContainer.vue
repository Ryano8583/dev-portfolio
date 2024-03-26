<script setup lang="ts">
defineProps<{
  /** Value of the text for the <h3> */
  heading: string;
  /** For alternating time lines, set the container on the left side of the line */
  sideLeft?: boolean;
  /** For alternating time lines, set the container on the right side of the line */
  sideRight?: boolean;
}>();
</script>

<template>
  <div
    class="relative py-3 pr-5 pl-9 w-full box-border"
    :class="{
      'left-0 sm:pr-9 sm:pl-5 sm:w-1/2': sideLeft,
      'sm:left-1/2 sm:pr-5 sm:pl-9 sm:w-1/2': sideRight,
    }"
  >
    <div
      class="relative py-5 px-7 border-[1px] border-transparent rounded-md bg-gray-100 shadow-full dark:border-white dark:bg-zinc-600 dark:shadow-none before:absolute before:top-3 before:-left-[40.5px] before:z-10 before:w-6 before:h-6 before:border-4 before:border-blue-800 before:rounded-full before:bg-gray-100 before:dark:border-blue-200 before:dark:bg-zinc-600"
      :class="
        sideLeft
          ? 'sm:before:-right-[53px] sm:before:left-[unset]'
          : sideRight
            ? 'sm:before:-left-[44px]'
            : 'sm:w-9/12'
      "
    >
      <div
        class="absolute -left-[20.5px] w-[30px] h-[10px] bg-zinc-500 dark:bg-white rotate-[270deg] before:absolute before:top-[2px] before:left-[2.5px] before:z-10 before:w-[25px] before:h-[9px] before:bg-gray-100 dark:-left-5 before:dark:bg-zinc-600"
        :class="{
          'sm:-right-[20.5px] sm:left-[unset] sm:rotate-90  sm:dark:-right-5 sm:dark:left-[unset]':
            sideLeft,
        }"
        before-arrow
      ></div>
      <h3 class="text-xl text-[#353535] dark:text-zinc-50">{{ heading }}</h3>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
[before-arrow] {
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);

  &::before {
    clip-path: inherit;
  }
}
</style>
