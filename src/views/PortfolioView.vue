<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutContainer from "@/components/LayoutContainer.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

import CalloutBoxes from "@/portfolio/CalloutBoxes.vue";
import CollapsibleContent from "@/portfolio/CollapsibleContent.vue";
import FlipCard from '@/portfolio/FlipCard.vue';
import HtmlTemplate from "@/portfolio/HtmlTemplate.vue";
import InlineQuestion from "@/portfolio/InlineQuestion.vue";
import TabMenus from "@/portfolio/TabMenus.vue";
import TimeLines from "@/portfolio/TimeLines.vue";

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

    <LayoutSection id="section-7" heading="Timelines">
      <LayoutContainer>
        <TimeLines />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-8" heading="Inline Question">
      <LayoutContainer>
        <InlineQuestion />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-9" heading="Collapsible Menu">
      <LayoutContainer>
        <CollapsibleContent />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-10" heading="Tab Menus">
      <LayoutContainer>
        <TabMenus />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-11" heading="Flip Card">
      <LayoutContainer>
        <FlipCard />
      </LayoutContainer>
    </LayoutSection>
  </TheMain>
</template>
