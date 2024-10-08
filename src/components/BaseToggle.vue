<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "../composables/faLibrary";

const props = defineProps<{
  /** Use "x" mark icon when disabled and check mark when enabled */
  defaultIcon?: boolean;

  /** Hide label from screen (still available to screen readers) */
  hideLabel?: boolean;

  /** The [id] of an external element that provides a label */
  id?: string;

  /** Along with the update:modelValue event, this implements [v-model] for this component
   * and is not intended for direct use.
   * default: false
   */
  modelValue?: boolean;

  /** Blue background */
  useBlue?: boolean;

  /** Red background */
  useRed?: boolean;
}>();

const isChecked = ref(props.modelValue ?? false);
const emit = defineEmits<{
  (event: "update:modelValue", value?: typeof props.modelValue): void;
}>();

function toggle() {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
}
</script>

<template>
  <div
    class="flex gap-3 items-center whitespace-nowrap sm:gap-5 cursor-pointer"
    :class="{
      'rounded-md hover:outline hover:outline-1 hover:outline-offset-4 focus-visible:outline-offset-4':
        !hideLabel,
    }"
    role="switch"
    :aria-checked="isChecked"
    :aria-labelledby="id"
    tabindex="0"
    @click="toggle"
    @keydown.enter="toggle"
    @keydown.space.prevent="toggle"
  >
    <div
      :id="id"
      class="text-gray-900 dark:text-gray-50"
      :class="{ hidden: hideLabel }"
    >
      <slot />
    </div>

    <div
      class="group p-1 w-fit min-w-[3.5rem] rounded-full shadow-inner motion-safe:transition-colors motion-safe:duration-400"
      :class="{
        'bg-zinc-200': !isChecked,
        'bg-blue-800 dark:bg-blue-200': props.useBlue && isChecked,
        'bg-red-800 dark:bg-red-200': props.useRed && isChecked,
        'bg-zinc-400': !useBlue && !useRed && isChecked,
      }"
    >
      <div
        class="flex justify-center p-1 w-6 min-h-[1.5rem] text-gray-50 bg-zinc-800 rounded-full shadow group-hover:shadow-md group-focus-visible:shadow-md motion-safe:duration-400"
        :class="{ 'translate-x-full': isChecked }"
      >
        <slot name="icon">
          <FontAwesomeIcon
            v-if="defaultIcon"
            :icon="isChecked ? 'check' : 'xmark'"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
