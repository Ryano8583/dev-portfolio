<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "../composables/faLibrary";

const menuButton = ref<HTMLButtonElement>();
const menuContainer = ref<HTMLDivElement>();
const isExpanded = ref(false);

function toggle() {
  isExpanded.value = !isExpanded.value;

  if (isExpanded.value) {
    document.addEventListener("click", collapseOnExit);
    document.addEventListener("focusin", collapseOnExit);
    return;
  }
  document.removeEventListener("click", collapseOnExit);
  document.removeEventListener("focusin", collapseOnExit);
}

function collapseOnExit(e: Event) {
  if (
    !(e.target instanceof Node) ||
    menuButton.value?.contains(e.target) ||
    menuContainer.value?.contains(e.target)
  ) {
    return;
  }
  isExpanded.value = false;
  document.removeEventListener("click", collapseOnExit);
  document.removeEventListener("focusin", collapseOnExit);
}
</script>

<template>
  <li class="relative flex-grow flex justify-end mr-4 list-none">
    <button
      ref="menuButton"
      class="py-2 px-4 rounded-md motion-safe:transition-colors motion-safe:duration-400 cursor-pointer"
      :class="
        isExpanded
          ? 'bg-gray-200 shadow-full focus-visible:outline-offset-4 dark:bg-zinc-500 dark:shadow-none'
          : 'hover:bg-gray-200 hover:shadow-full focus-visible:outline-offset-4 dark:hover:bg-zinc-500 dark:hover:shadow-none'
      "
      @click="toggle"
    >
      <FontAwesomeIcon
        icon="gear"
        class="w-4 text-gray-900 dark:text-gray-50"
      />
    </button>
    <div
      ref="menuContainer"
      class="absolute top-14 right-0 flex flex-col gap-3 sm:gap-5 p-3 w-auto border-[1px] border-transparent rounded-md bg-gray-100 shadow-full dark:border-white dark:bg-zinc-600 dark:shadow-none before:absolute before:-top-2 before:right-3 before:w-4 before:h-2 before:bg-gray-100 dark:before:bg-zinc-600"
      :class="isExpanded ? 'block' : 'hidden'"
    >
      <slot />
    </div>
  </li>
</template>

<style scoped lang="postcss">
div::before {
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
}
</style>
