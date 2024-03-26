<script setup lang="ts">
import BaseInlineQuestion from "./components/BaseInlineQuestion.vue";
</script>

<template>
  <BaseInlineQuestion>
    <template #question>
      <p>
        Fun fact: who are my favorite light and dark side characters from Star
        Wars?
      </p>
    </template>
    <template #answer>
      <p>Ahsoka Tano and Maul</p>
    </template>
  </BaseInlineQuestion>
</template>
