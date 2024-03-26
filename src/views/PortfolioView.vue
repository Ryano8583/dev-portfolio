<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutContainer from "@/components/LayoutContainer.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

import CalloutBoxes from "@/portfolio/CalloutBoxes.vue";
import HtmlTemplate from "@/portfolio/HtmlTemplate.vue";

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
    <LayoutSection id="section-5" heading="HTML Template">
      <LayoutContainer>
        <HtmlTemplate />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-6" heading="Callout Boxes">
      <LayoutContainer>
        <CalloutBoxes />
      </LayoutContainer>
    </LayoutSection>
  </TheMain>
</template>
