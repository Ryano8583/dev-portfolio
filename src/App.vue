<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { scrollListener, showTopBar } from "./composables/topBar";

import BaseNavigation from "./components/BaseNavigation.vue";
import BaseNavLink from "./components/BaseNavLink.vue";

import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheThemeToggle from "./components/TheThemeToggle.vue";
import TheTopBar from "./components/TheTopBar.vue";

onMounted(() => {
  setTimeout(() => {
    scrollListener();
  }, 500);
});

function ensureDisplay() {
  const topBar = document.getElementById("top-bar") as HTMLDivElement;
  if (topBar.classList.contains("fade-out-t")) {
    showTopBar(topBar);
  }
}
</script>

<template>
  <TheTopBar>
    <TheHeader>Ryan Overmyer's Resume & Portfolio</TheHeader>

    <div class="flex flex-grow justify-end items-center gap-3 sm:gap-5">
    <BaseNavigation>
      <BaseNavLink to="resume" @focusin="ensureDisplay">Resume</BaseNavLink>
      <BaseNavLink to="portfolio" @focusin="ensureDisplay"
        >Portfolio</BaseNavLink
      >
    </BaseNavigation>

    <TheThemeToggle @focusin="ensureDisplay" />
    </div>
  </TheTopBar>

  <router-view />

  <TheFooter />
</template>
