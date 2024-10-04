<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { scrollListener, showTopBar } from "./composables/topBar";

import BaseNavigation from "./components/BaseNavigation.vue";
import BaseNavLink from "./components/BaseNavLink.vue";
import BaseNavMenu from "./components/BaseNavMenu.vue";

import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheLanguageSelector from "./components/TheLanguageSelector.vue";
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
        <BaseNavMenu>
          <TheLanguageSelector />
          <TheThemeToggle @focusin="ensureDisplay" />
        </BaseNavMenu>
      </BaseNavigation>
    </div>
  </TheTopBar>

  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <TheFooter />
</template>

<style lang="scss">
@media (prefers-reduced-motion: no-preference) {
  .v- {
    &leave- {
      &to {
        opacity: 0;
        transform: translateX(-50px);
      }

      &active {
        transition: all 0.4s ease-in;
      }
    }
    &enter- {
      &from {
        opacity: 0;
        transform: translateX(50px);
      }

      &active {
        transition: all 0.4s ease-out;
      }
    }
  }
}
</style>
