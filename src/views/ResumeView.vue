<script setup lang="ts">
import LayoutColumn from "@/components/LayoutColumn.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";
</script>

<template>
  <TheMain>
    <LayoutSection id="section-1" heading="Contact" use-blue> </LayoutSection>

    <LayoutSection id="section-2" heading="Education" use-green>
    </LayoutSection>

    <LayoutSection id="section-3" heading="Work Experience" use-purple>
      <LayoutColumn> </LayoutColumn>
    </LayoutSection>

    <LayoutSection id="section-4" heading="Accomplishments" use-orange>
    </LayoutSection>
  </TheMain>
</template>
