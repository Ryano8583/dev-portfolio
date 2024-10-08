<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { FontAwesomeIcon } from "../../composables/faLibrary";

import BaseButton from "@/components/BaseButton.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";

const { t } = useI18n({
  useScope: "local",
});

const isExpanded = ref(false);

function toggle() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <aside
    class="flex gap-3 sm:gap-5 my-4 mx-auto p-3 w-auto border-[1px] border-transparent rounded-md bg-gray-100 shadow-full dark:border-white dark:bg-zinc-600 dark:shadow-none sm:w-2/3"
  >
    <FontAwesomeIcon
      icon="circle-question"
      class="my-4 w-12 h-12 text-gray-500 dark:text-zinc-400 sm:mx-4"
    />
    <LayoutColumn class="my-4 w-full">
      <slot name="question" />
      <BaseButton
        class="mt-4 w-fit"
        use-blue
        :aria-expanded="isExpanded"
        @click="toggle"
        >{{ isExpanded ? t("expanded") : t("collapsed") }}
        {{ t("baseline") }}</BaseButton
      >
      <div class="mt-4" :class="isExpanded ? '' : 'invisible hidden'">
        <slot name="answer" />
      </div>
    </LayoutColumn>
  </aside>
</template>

<i18n lang="yaml">
{
  en: { baseline: "answer", collapsed: "Reveal", expanded: "Hide" },
  es: { baseline: "respuesta", collapsed: "Revelar", expanded: "Esconder" },
  fr: { baseline: "répondre", collapsed: "Révéler", expanded: "Cacher" },
  hi: { baseline: "उत्तर", collapsed: "प्रकट करना", expanded: "छिपाना" },
  zh: { baseline: "回答", collapsed: "揭示", expanded: "隐藏" },
}
</i18n>
