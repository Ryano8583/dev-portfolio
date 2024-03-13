<script setup lang="ts">
import { RouterView } from "vue-router";

import BaseNavigation from "./components/BaseNavigation.vue";

import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheThemeToggle from "./components/TheThemeToggle.vue";
</script>

<template>
  <TheHeader>Ryan Overmyer's Resume & Portfolio</TheHeader>

  <BaseNavigation></BaseNavigation>
  <TheThemeToggle />

  <RouterView />

  <TheFooter />
</template>
