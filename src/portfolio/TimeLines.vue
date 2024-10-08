<script setup lang="ts">
import { useI18n } from "vue-i18n";

import BaseTimeLineContainer from "./components/BaseTimeLineContainer.vue";
import BaseTimeLineMain from "./components/BaseTimeLineMain.vue";

import LayoutColumn from "@/components/LayoutColumn.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <LayoutColumn>
    <BaseTimeLineMain>
      <BaseTimeLineContainer :heading="$d(new Date('2016-09-03'), 'year')">
        <p>{{ t("time-line-1.container-1") }}</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer :heading="$d(new Date('2017-11-19'), 'year')">
        <p>{{ t("time-line-1.container-2") }}</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer :heading="$d(new Date('2020-05-20'), 'year')">
        <p>{{ t("time-line-1.container-3") }}</p>
      </BaseTimeLineContainer>
    </BaseTimeLineMain>

    <BaseTimeLineMain use-alternating>
      <BaseTimeLineContainer
        :heading="$d(new Date('2020-08-13'), 'year')"
        side-left
      >
        <p>{{ t("time-line-2.container-1") }}</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer
        :heading="$d(new Date('2021-08-25'), 'year')"
        side-right
      >
        <p>{{ t("time-line-2.container-2") }}</p>
      </BaseTimeLineContainer>
      <BaseTimeLineContainer
        :heading="$d(new Date('2022-12-25'), 'year')"
        side-left
      >
        <p>{{ t("time-line-2.container-3") }}</p>
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

<i18n lang="yaml">
{
  en:
    {
      time-line-1:
        {
          container-1: "Married the actual love of my life, my wife",
          container-2: "Witnessed the miracle of my first child being born",
          container-3: "Blessed to witness the birth of my second child",
        },
      time-line-2:
        {
          container-1: "Began learning HTML, CSS, and SASS",
          container-2: "Began learning JavaScript",
          container-3: "Began learning Vue 3",
        },
    },
  es:
    {
      time-line-1:
        {
          container-1: "Me casé con el verdadero amor de mi vida, mi esposa.",
          container-2: "Fui testigo del milagro del nacimiento de mi primer hijo",
          container-3: "Bendecido por presenciar el nacimiento de mi segundo hijo.",
        },
      time-line-2:
        {
          container-1: "Comenzó a aprender HTML, CSS y SASS.",
          container-2: "Empecé a aprender JavaScript",
          container-3: "Comencé a aprender Vue 3",
        },
    },
  fr:
    {
      time-line-1:
        {
          container-1: "J'ai épousé le véritable amour de ma vie, ma femme",
          container-2: "J'ai été témoin du miracle de la naissance de mon premier enfant",
          container-3: "Heureux d'assister à la naissance de mon deuxième enfant",
        },
      time-line-2:
        {
          container-1: "J'ai commencé à apprendre HTML, CSS et SASS",
          container-2: "J'ai commencé à apprendre JavaScript",
          container-3: "J'ai commencé à apprendre Vue 3",
        },
    },
  hi:
    {
      time-line-1:
        {
          container-1: "अपने जीवन के वास्तविक प्यार, अपनी पत्नी से विवाह किया",
          container-2: "अपने पहले बच्चे के जन्म का चमत्कार देखा",
          container-3: "अपने दूसरे बच्चे के जन्म का साक्षी बनकर धन्य हो गया।",
        },
      time-line-2:
        {
          container-1: "HTML, CSS और SASS सीखना शुरू किया",
          container-2: "जावास्क्रिप्ट सीखना शुरू किया",
          container-3: "Vue 3 सीखना शुरू किया",
        },
    },
  zh:
    {
      time-line-1:
        {
          container-1: "娶了我一生挚爱的妻子",
          container-2: "见证我第一个孩子出生的奇迹",
          container-3: "很荣幸见证我的第二个孩子的出生",
        },
      time-line-2:
        {
          container-1: "开始学习 HTML、CSS 和 SASS",
          container-2: "开始学习 JavaScript",
          container-3: "开始学习 Vue 3",
        },
    },
}
</i18n>
