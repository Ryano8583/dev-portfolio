<script setup lang="ts">
import BaseTimeLineContainer from "./components/BaseTimeLineContainer.vue";
import BaseTimeLineMain from "./components/BaseTimeLineMain.vue";

import LayoutColumn from "@/components/LayoutColumn.vue";
</script>

<template>
  <LayoutColumn>
    <BaseTimeLineMain>
      <BaseTimeLineContainer heading="2016">
        <p>Married the actual love of my life, my wife</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer heading="2017">
        <p>Witnessed the miracle of my first child being born</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer heading="2020">
        <p>Blessed to witness the birth of my second child</p>
      </BaseTimeLineContainer>
    </BaseTimeLineMain>

    <BaseTimeLineMain use-alternating>
      <BaseTimeLineContainer heading="2020" side-left>
        <p>Began learning HTML, CSS, and SASS</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer heading="2021" side-right>
        <p>Began learning JavaScript</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer heading="2022" side-left>
        <p>Began learning Vue 3</p>
      </BaseTimeLineContainer>
    </BaseTimeLineMain>
  </LayoutColumn>
</template>

<style scoped lang="scss">
[before-arrow] {
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);

  &::before {
    clip-path: inherit;
  }
}
</style>
