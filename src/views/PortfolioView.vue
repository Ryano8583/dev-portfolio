<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutContainer from "@/components/LayoutContainer.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

onMounted(timeToObserve);
onBeforeUnmount(() => {
  observerHeadings.disconnect();
});

function timeToObserve() {
  for (const target of document.querySelectorAll("section")) {
    observerHeadings.observe(target);
  }
}
</script>

<template>
  <TheMain>
    <LayoutSection id="section-5" heading="">
      <LayoutContainer>
      </LayoutContainer>
    </LayoutSection>
  </TheMain>
</template>
