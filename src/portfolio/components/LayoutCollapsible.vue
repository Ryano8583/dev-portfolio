<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "../../composables/faLibrary";

const props = defineProps<{
  /** The [id] of an external element that provides a label */
  id?: string;
}>();

const isExpanded = ref(false);

function toggle() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div class="p-4">
    <div
      class="mx-auto p-3 border-[1.5px] rounded-md border-zinc-900 font-bold text-zinc-900 cursor-pointer motion-safe:transition-colors motion-safe:duration-400 focus-visible:outline-offset-4 dark:border-white"
      :class="
        isExpanded
          ? 'rounded-b-none bg-blue-200 hover:bg-blue-100 focus-visible:bg-blue-100'
          : 'bg-gray-100 hover:bg-gray-200 focus-visible:bg-gray-400 dark:bg-zinc-600 dark:text-zinc-50 dark:hover:bg-zinc-500 dark:focus-visible:bg-zinc-500'
      "
      role="button"
      tabindex="0"
      :aria-controls="props.id"
      :aria-expanded="isExpanded"
      @click="toggle"
      @keydown.enter="toggle"
      @keydown.space.prevent="toggle"
    >
      <div class="flex justify-between items-center">
        <slot name="heading" />
        <FontAwesomeIcon
          icon="circle-chevron-down"
          class="motion-reduce:animate-none"
          :class="
            isExpanded ? 'animate-rotateUp rotate-180' : 'animate-rotateDown'
          "
        />
      </div>
    </div>
    <div
      :id="props.id"
      class="p-3 border-t-0 border-[1.5px] rounded-b-md border-zinc-900 dark:border-white"
      :class="{ hidden: !isExpanded }"
    >
      <slot />
    </div>
  </div>
</template>
