<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  /** If non-decorative image is used for the back side */
  altBack?: string;

  /** If non-decorative image is used for the front side */
  altFront?: string;

  /** Text for if a heading is to be used on the back side */
  headingBack?: string;

  /** Text for if a heading is to be used on the front side */
  headingFront?: string;

  /** File name and type, if a sole image is to be used on the back side */
  imageBack?: string;

  /** File name and type, if a sole image is to be used on the front side */
  imageFront?: string;
}>();

const isFlipped = ref(false);

function flip() {
  isFlipped.value = !isFlipped.value;
}
</script>

<!-- NOTE: uses a custom class from the tailwind.config.js !!!!! 
  shadow.full
-->

<template>
  <div
    class="flex flex-col my-0 mx-auto py-4 px-2 overflow-hidden cursor-pointer"
    :aria-pressed="isFlipped"
    @click="flip"
    @keydown.enter="flip"
    @keydown.space.prevent="flip"
  >
    <div
      class="flex flex-col flex-1 p-3 bg-white shadow-card transition-transform duration-700 hover:shadow-card-hover focus-visible:outline-offset-[3px] focus-visible:shadow-none dark:bg-zinc-600 dark:shadow-card-dark dark:hover:shadow-card-dark-hover dark:focus-visible:shadow-none print:gap-4"
      :class="{ 'apply-flip': isFlipped }"
      tabindex="0"
      data-card="container"
    >
      <div
        class="print:block"
        :class="isFlipped ? 'hidden' : 'block'"
        data-card="side"
      >
        <p class="hidden print:block">** Front of the flip card **</p>

        <img
          v-if="imageFront"
          :src="imageFront"
          class=""
          :alt="altFront ?? ''"
        />

        <span v-else-if="headingFront">
          <h3 class="mb-2 text-3xl text-zinc-900 dark:text-zinc-50">
            {{ headingFront }}
          </h3>
          <slot name="front-content" />
        </span>
      </div>

      <hr class="hidden print:block print:w-11/12" />

      <div
        class="print:block"
        :class="isFlipped ? 'block apply-flip' : 'hidden'"
        data-card="side"
      >
        <p class="hidden print:block">** Back of the flip card **</p>

        <img v-if="imageBack" :src="imageBack" class="" :alt="altBack ?? ''" />

        <span v-else-if="headingBack">
          <h3 class="mb-2 text-3xl text-zinc-900 dark:text-zinc-50">
            {{ headingBack }}
          </h3>
          <slot name="back-content" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
[data-card="container"] {
  transform-style: preserve-3d;
  perspective: 1000px;

  [data-card="side"] {
    backface-visibility: hidden;
  }
}

.apply-flip {
  transform: rotateY(180deg);
}

@media print {
  [data-card="container"] {
    transform-style: unset;
  }

  .apply-flip {
    transform: none;
  }
}
</style>
