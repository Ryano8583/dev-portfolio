<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/TheHeader.vue";
import TheThemeToggle from "./components/TheThemeToggle.vue";
</script>

<template>
  <TheHeader>Ryan Overmyer's Resume & Portfolio</TheHeader>

  <TheThemeToggle />

  <RouterView />
</template>
