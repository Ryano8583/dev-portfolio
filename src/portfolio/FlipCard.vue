<script setup lang="ts">
import BaseFlipCard from './components/BaseFlipCard.vue';
</script>

<template>
  <BaseFlipCard heading-front="Light Mode" heading-back="Dark Mode">
    <template #front-content>
      <p>Most websites and apps only support light mode. Traditionally, this is how applications were all built. As people spend more and more of their days looking at a screen, the need for apps to include dark mode support is rising. Staring at apps with primarily white and light colors for an extended period causes eye strain.</p>
    </template>
    <template #back-content>
      <p>Integrating dark mode into an application takes some leg work. Remembering that darker colors must also meet WCAG color contrast standards is essential.</p>
      <p>Preferably, the app will follow a user's device setting for which display mode it enables by default. Nonetheless, the app should allow users to toggle between the display modes.</p>
    </template>
  </BaseFlipCard>
</template>
