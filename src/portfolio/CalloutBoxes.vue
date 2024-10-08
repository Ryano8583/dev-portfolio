<script setup lang="ts">
import { useI18n } from "vue-i18n";

import BaseCalloutBox from "./components/BaseCalloutBox.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <LayoutColumn>
    <BaseCalloutBox :heading="t('callout-1.heading')">
      <p>
        {{ t("callout-1.p") }}
      </p>
    </BaseCalloutBox>

    <BaseCalloutBox :heading="t('callout-2.heading')" use-icon>
      <p>
        {{ t("callout-2.p") }}
      </p>
    </BaseCalloutBox>
  </LayoutColumn>
</template>

<i18n lang="yaml">
{
  en:
    {
      callout-1:
        {
          heading: "In the Beginning",
          p: "I picked up coding a few years ago by happenstance. Course content within my current employer's Learning Management System needed a UI overhaul, and one way or another, the responsibility of generating new HTML templates fell on my plate.",
        },
      callout-2:
        {
          heading: "And Until the End",
          p: "As cheesy as it sounds, the moment I began learning to code was like love at first sight, and I have never looked back. I love and want to do coding for the rest of my career.",
        },
    },
  es:
    {
      callout-1:
        {
          heading: "Al principio",
          p: "Hace unos años empecé a programar por casualidad. El contenido del curso dentro del sistema de gestión de aprendizaje de mi empleador actual necesitaba una revisión de la interfaz de usuario y, de una forma u otra, la responsabilidad de generar nuevas plantillas HTML recayó sobre mí.",
        },
      callout-2:
        {
          heading: "Y hasta el final",
          p: "Por muy cursi que suene, el momento en que comencé a aprender a programar fue como amor a primera vista, y nunca miré atrás. Amo y quiero programar por el resto de mi carrera.",
        },
    },
  fr:
    {
      callout-1:
        {
          heading: "Au début",
          p: "J'ai commencé à coder il y a quelques années par hasard. Le contenu des cours du système de gestion de l'apprentissage de mon employeur actuel avait besoin d'une refonte de l'interface utilisateur et, d'une manière ou d'une autre, la responsabilité de générer de nouveaux modèles HTML m'est tombée dessus.",
        },
      callout-2:
        {
          heading: "Et jusqu'à la fin",
          p: "Aussi ringard que cela puisse paraître, le moment où j'ai commencé à apprendre à coder a été comme un coup de foudre, et je n'ai jamais regretté ma décision. J'adore et je veux faire du codage pour le reste de ma carrière.",
        },
    },
  hi:
    {
      callout-1:
        {
          heading: "प्रारंभ में",
          p: "मैंने कुछ साल पहले संयोग से कोडिंग सीखी थी। मेरे वर्तमान नियोक्ता के लर्निंग मैनेजमेंट सिस्टम में पाठ्यक्रम की सामग्री को UI ओवरहाल की आवश्यकता थी, और किसी न किसी तरह, नए HTML टेम्प्लेट बनाने की जिम्मेदारी मेरे ऊपर आ गई।",
        },
      callout-2:
        {
          heading: "और अंत तक",
          p: "सुनने में भले ही अजीब लगे, लेकिन जब मैंने कोडिंग सीखना शुरू किया तो मुझे पहली नजर में ही प्यार हो गया और फिर मैंने कभी पीछे मुड़कर नहीं देखा। मुझे कोडिंग बहुत पसंद है और मैं अपने करियर के बाकी हिस्से में भी कोडिंग ही करना चाहता हूँ।",
        },
    },
  zh:
    {
      callout-1:
        {
          heading: "起初",
          p: "几年前，我偶然开始学习编程。我目前雇主的学习管理系统中的课程内容需要彻底改造 UI，而不管怎样，生成新 HTML 模板的责任都落在了我的肩上。",
        },
      callout-2:
        {
          heading: "直到最后",
          p: "虽然听起来很俗气，但我开始学习编程的那一刻就像一见钟情，我从未后悔过。我热爱编程，并希望在我的余生中一直从事编程工作。",
        },
    },
}
</i18n>
