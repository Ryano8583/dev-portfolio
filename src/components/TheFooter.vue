<script setup lang="ts">
import { FontAwesomeIcon } from "../composables/faLibrary";
</script>

<template>
  <footer>
    <div
      class="flex justify-center gap-5 p-4 bg-gradient-to-b from-slate-200 to-slate-300 transition-fade duration-200 dark:from-slate-900 dark:to-slate-950 md:pl-20 md:pr-24"
    >
      <a href="https://github.com/Ryano8583/dev-portfolio">
        <FontAwesomeIcon
          :icon="['fab', 'square-github']"
          class="h-8 cursor-pointer text-zinc-900 dark:text-zinc-50"
        />
      </a>
      <a href="https://www.linkedin.com/in/ryan-overmyer-8b1353107/">
        <FontAwesomeIcon
          :icon="['fab', 'linkedin']"
          class="h-8 cursor-pointer text-zinc-900 dark:text-zinc-50"
        />
      </a>
    </div>
  </footer>
</template>
