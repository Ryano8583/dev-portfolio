<script setup lang="ts">
import BaseCalloutBox from "./components/BaseCalloutBox.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";
</script>

<template>
  <LayoutColumn>
    <BaseCalloutBox heading="In the Beginning">
      <p>
        I picked up coding a few years ago by happenstance. Course content
        within my current employer's Learning Management System needed a UI
        overhaul, and one way or another, the responsibility of generating new
        HTML templates fell on my plate.
      </p>
    </BaseCalloutBox>

    <BaseCalloutBox heading="And Until the End" use-icon>
      <p>
        As cheesy as it sounds, the moment I began learning to code was like
        love at first sight, and I have never looked back. I love and want to do
        coding for the rest of my career.
      </p>
    </BaseCalloutBox>
  </LayoutColumn>
</template>
