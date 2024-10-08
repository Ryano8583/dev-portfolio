<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BaseInlineQuestion from "./components/BaseInlineQuestion.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <BaseInlineQuestion>
    <template #question>
      <p>
        {{ t("question") }}
      </p>
    </template>
    <template #answer>
      <p>{{ t("answer") }}</p>
    </template>
  </BaseInlineQuestion>
</template>

<i18n lang="yaml">
{
  en:
    {
      question: "Fun fact: who are my favorite light and dark side characters from Star Wars?",
      answer: "Ahsoka Tano and Maul",
    },
  es:
    {
      question: "Dato curioso: ¿quiénes son mis personajes favoritos del lado claro y oscuro de Star Wars?",
      answer: "Ahsoka Tano y Maul",
    },
  fr:
    {
      question: "Fait amusant : qui sont mes personnages préférés du côté lumineux et du côté obscur de Star Wars ?",
      answer: "Ahsoka Tano et Maul",
    },
  hi:
    {
      question: "मजेदार तथ्य: स्टार वार्स के मेरे पसंदीदा प्रकाश और अंधेरे पक्ष के पात्र कौन हैं?",
      answer: "अहोसा तानो और मौल",
    },
  zh:
    {
      question: "有趣的事实：《星球大战》中我最喜欢的光明面和黑暗面人物是谁？",
      answer: "阿索卡·塔诺和摩尔",
    },
}
</i18n>
