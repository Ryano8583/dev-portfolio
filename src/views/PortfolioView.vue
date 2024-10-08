<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutContainer from "@/components/LayoutContainer.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

import CalloutBoxes from "@/portfolio/CalloutBoxes.vue";
import CollapsibleContent from "@/portfolio/CollapsibleContent.vue";
import FlipCard from "@/portfolio/FlipCard.vue";
import HtmlTemplate from "@/portfolio/HtmlTemplate.vue";
import InlineQuestion from "@/portfolio/InlineQuestion.vue";
import TabMenus from "@/portfolio/TabMenus.vue";
import TimeLines from "@/portfolio/TimeLines.vue";

onMounted(timeToObserve);
onBeforeUnmount(() => {
  observerHeadings.disconnect();
});

const { t } = useI18n({
  useScope: "local",
});

function timeToObserve() {
  for (const target of document.querySelectorAll("section")) {
    observerHeadings.observe(target);
  }
}
</script>

<template>
  <TheMain>
    <LayoutSection id="section-5" :heading="t('section-5')">
      <LayoutContainer>
        <HtmlTemplate />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-6" :heading="t('section-6')">
      <LayoutContainer>
        <CalloutBoxes />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-7" :heading="t('section-7')">
      <LayoutContainer>
        <TimeLines />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-8" :heading="t('section-8')">
      <LayoutContainer>
        <InlineQuestion />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-9" :heading="t('section-9')">
      <LayoutContainer>
        <CollapsibleContent />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-10" :heading="t('section-10')">
      <LayoutContainer>
        <TabMenus />
      </LayoutContainer>
    </LayoutSection>

    <LayoutSection id="section-11" :heading="t('section-11')">
      <LayoutContainer>
        <FlipCard />
      </LayoutContainer>
    </LayoutSection>
  </TheMain>
</template>

<i18n lang="yaml">
{
  en:
    {
      section-5: "HTML Template",
      section-6: "Callout Boxes",
      section-7: "Timelines",
      section-8: "Inline Question",
      section-9: "Collapsible Menu",
      section-10: "Tab Menus",
      section-11: "Flip Card",
    },
  es:
    {
      section-5: "Plantilla HTML",
      section-6: "Cuadros de Llamada",
      section-7: "Líneas de Tiempo",
      section-8: "Pregunta en Línea",
      section-9: "Menú Plegable",
      section-10: "Menús de Pestañas",
      section-11: "Carta Invertida",
    },
  fr:
    {
      section-5: "Modèle HTML",
      section-6: "Boîtes d'Appel",
      section-7: "Délais",
      section-8: "Question en Ligne",
      section-9: "Menu Pliable",
      section-10: "Menus à Onglets",
      section-11: "Retourner la Carte",
    },
  hi:
    {
      section-5: "HTML टेम्पलेट",
      section-6: "कॉलआउट बॉक्स",
      section-7: "समयसीमा",
      section-8: "इनलाइन प्रश्न",
      section-9: "संक्षिप्त करने योग्य मेनू",
      section-10: "टैब मेनू",
      section-11: "फ़्लिप कार्ड",
    },
  zh:
    {
      section-5: "HTML 模板",
      section-6: "标注框",
      section-7: "时间线",
      section-8: "内联问题",
      section-9: "折叠菜单",
      section-10: "选项卡菜单",
      section-11: "目录卡片",
    },
}
</i18n>
