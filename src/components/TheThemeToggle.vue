<script setup lang="ts">
import { useDarkMode, isDarkMode } from "../composables/darkMode";
import { FontAwesomeIcon } from "../composables/faLibrary";

import BaseToggle from "./BaseToggle.vue";

useDarkMode({ from: "class" });
</script>

<template>
  <BaseToggle id="dark-mode" v-model="isDarkMode">
    Dark mode
    <template #icon>
      <FontAwesomeIcon :icon="['far', isDarkMode ? 'moon' : 'sun']" />
    </template>
  </BaseToggle>
</template>
