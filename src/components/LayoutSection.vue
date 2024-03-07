<script setup lang="ts">
defineProps<{
  /** Value of the text for the <h2>. */
  heading: string;

  /** Value of the [id] for this <section>. */
  id: string;

  /** Blue background */
  useBlue?: boolean;

  /** Green background */
  useGreen?: boolean;

  /** Orange background */
  useOrange?: boolean;

  /** Pink background */
  usePink?: boolean;

  /** Purple background */
  usePurple?: boolean;
}>();
</script>

<template>
  <section
    :id="id"
    class="p-3 rounded-2xl border-[1px] border-transparent shadow dark:border-white dark:shadow-none sm:p-5"
    :class="
      useBlue
        ? 'bg-blue-400 dark:bg-blue-999'
        : useGreen
          ? 'bg-green-400 dark:bg-green-999'
          : useOrange
            ? 'bg-orange-400 dark:bg-orange-999'
            : usePink
              ? 'bg-pink-400 dark:bg-pink-999'
              : usePurple
                ? 'bg-purple-400 dark:bg-purple-999'
                : 'bg-zinc-400 dark:bg-zinc-800'
    "
  >
    <h2
      class="opacity-0 mb-3 text-5xl font-bold text-zinc-900 dark:text-zinc-50 translate-y-48 transition-fade duration-200 sm:mb-5"
    >
      {{ heading }}
    </h2>
    <slot />
  </section>
</template>
