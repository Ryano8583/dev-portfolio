<script setup lang="ts">
import { RouterView } from "vue-router";

import BaseNavigation from "./components/BaseNavigation.vue";
import BaseNavLink from "./components/BaseNavLink.vue";

import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheThemeToggle from "./components/TheThemeToggle.vue";
</script>

<template>
  <TheHeader>Ryan Overmyer's Resume & Portfolio</TheHeader>

  <BaseNavigation>
    <BaseNavLink to="resume">Resume</BaseNavLink>
    <BaseNavLink to="portfolio">Portfolio</BaseNavLink>
  </BaseNavigation>
  <TheThemeToggle />

  <router-view />

  <TheFooter />
</template>
