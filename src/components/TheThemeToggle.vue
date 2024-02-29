<script setup lang="ts">
import { useDarkMode, isDarkMode } from "../composables/darkMode";

import BaseToggle from "./BaseToggle.vue";

useDarkMode({ from: "class" });
</script>

<template>
  <BaseToggle id="dark-mode" v-model="isDarkMode" hide-label>
    Dark mode
  </BaseToggle>
</template>
