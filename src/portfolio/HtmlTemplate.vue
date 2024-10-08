<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <p class="icon GettingStarted"></p>
  <h2
    class="mt-[0.5em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:mb-6 sm:ml-20"
  >
    {{ t("getting-started.heading") }}
  </h2>
  <p class="my-4 text-[#353535] sm:ml-20">
    {{ t("getting-started.p-1") }}
  </p>
  <p class="my-4 text-[#353535] font-bold sm:ml-20">
    {{ t("getting-started.p-2") }}
  </p>
  <ul class="my-4 pl-10 sm:ml-20">
    <li class="list-disc text-[#353535]">
      {{ t("getting-started.li-1") }}
    </li>
    <li class="list-disc text-[#353535]">{{ t("getting-started.li-2") }}</li>
  </ul>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon BackgroundInfo"></p>
  <h2
    class="mt-[0.8em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:my-6 sm:ml-20"
  >
    {{ t("background-info.heading") }}
  </h2>
  <p class="my-4 text-[#353535] sm:ml-20">
    {{ t("background-info.p") }}
  </p>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon Instructions"></p>
  <h2
    class="mt-[0.8em] mb-[1em] text-2xl text-[#a6192e] dark:text-red-300 sm:my-6 sm:ml-20"
  >
    {{ t("instructions.heading") }}
  </h2>
  <ol class="my-4 pl-10 sm:ml-20">
    <li class="list-decimal text-[#353535]">
      {{ t("instructions.li-1") }}
    </li>
    <li class="list-decimal text-[#353535]">{{ t("instructions.li-2") }}</li>
  </ol>
  <hr class="clear-both my-2 mx-auto" />

  <p class="icon Assignments"></p>
  <h3 class="my-4 ml-[60px] text-xl text-[#353535] dark:text-zinc-50 sm:ml-20">
    {{ t("rubric") }}
  </h3>
  <h3 class="my-4 ml-[60px] text-xl text-[#353535] dark:text-zinc-50 sm:ml-20">
    {{ t("assignment") }}
  </h3>
</template>

<style scoped lang="scss">
@use "sass:math";

@mixin section-images($Names...) {
  @for $count from 0 to length($Names) {
    $Name: #{nth($Names, $count + 1)};
    .icon.#{$Name} {
      background-image: url("./assets/HTML_#{$Name}.png");
    }
  }
}

@include section-images(
  Assignments,
  BackgroundInfo,
  GettingStarted,
  Instructions
);

.icon {
  float: left;

  display: block;

  margin: math.div(60px - 45px, 2) (60px - 45px) 0.5em 0;
  width: 45px;
  height: 45px;

  background-size: 45px 45px;
  background-repeat: no-repeat;
}

@media print, screen and (min-width: 642px) {
  .icon {
    margin: 0 20px 0 0;
    width: 60px;
    height: 60px;

    background-size: 60px 60px;
  }
}
</style>

<i18n lang="yaml">
{
  en:
    {
      getting-started:
        {
          heading: "Getting Started",
          p-1: "An example of one of the HTML templates created for the Instructional Designers team at Indiana Wesleyan University. The templates provide uniform content across the courses students take.",
          p-2: "Upon successful completion of this assignment, you will be able to:",
          li-1: "Utilize the assignment activity based HTML template",
          li-2: "Build content for courses",
        },
      background-info:
        {
          heading: "Background Information",
          p: "A total of 18 activity based HTML templates created. Another 23 syllabi HTML templates.",
        },
      instructions:
        {
          heading: "Instructions",
          li-1: "Review the rubric to make sure you understand the criteria for earning your grade.",
          li-2: "Complete the assignment.",
        },
      rubric: "Review the associated rubric",
      assignment: "Access the assignment submission page",
    },
  es:
    {
      getting-started:
        {
          heading: "Empezando",
          p-1: "Un ejemplo de una de las plantillas HTML creadas para el equipo de diseñadores instruccionales de la Universidad Indiana Wesleyan. Las plantillas proporcionan contenido uniforme en todos los cursos que toman los estudiantes.",
          p-2: "Al completar con éxito esta tarea, usted podrá:",
          li-1: "Utilice la plantilla HTML basada en la actividad de asignación",
          li-2: "Crear contenido para cursos",
        },
      background-info:
        {
          heading: "Información de contexto",
          p: "Se crearon un total de 18 plantillas HTML basadas en actividades y otras 23 plantillas HTML de programas de estudio.",
        },
      instructions:
        {
          heading: "Instrucciones",
          li-1: "Revise la rúbrica para asegurarse de comprender los criterios para obtener su calificación.",
          li-2: "Completar la tarea.",
        },
      rubric: "Revisar la rúbrica asociada",
      assignment: "Acceda a la página de envío de tareas",
    },
  fr:
    {
      getting-started:
        {
          heading: "Commencer",
          p-1: "Exemple d'un des modèles HTML créés pour l'équipe de concepteurs pédagogiques de l'Indiana Wesleyan University. Les modèles fournissent un contenu uniforme pour tous les cours suivis par les étudiants.",
          p-2: "Une fois cette mission terminée avec succès, vous serez capable de :",
          li-1: "Utilisez le modèle HTML basé sur l'activité de mission",
          li-2: "Créer du contenu pour les cours",
        },
      background-info:
        {
          heading: "Informations d'arrière-plan",
          p: "Au total, 18 modèles HTML basés sur des activités ont été créés. 23 autres modèles HTML de programmes.",
        },
      instructions:
        {
          heading: "Instructions",
          li-1: "Consultez la rubrique pour vous assurer que vous comprenez les critères d’obtention de votre note.",
          li-2: "Complétez le devoir.",
        },
      rubric: "Consultez la rubrique associée",
      assignment: "Accéder à la page de soumission des devoirs",
    },
  hi:
    {
      getting-started:
        {
          heading: "शुरू करना",
          p-1: "इंडियाना वेस्लेयन यूनिवर्सिटी में इंस्ट्रक्शनल डिज़ाइनर्स टीम के लिए बनाए गए HTML टेम्प्लेट में से एक का उदाहरण। टेम्प्लेट छात्रों द्वारा लिए जाने वाले सभी पाठ्यक्रमों में एक समान सामग्री प्रदान करते हैं।",
          p-2: "इस कार्य को सफलतापूर्वक पूरा करने पर आप निम्नलिखित कार्य करने में सक्षम होंगे:",
          li-1: "असाइनमेंट गतिविधि आधारित HTML टेम्पलेट का उपयोग करें",
          li-2: "पाठ्यक्रमों के लिए सामग्री तैयार करें",
        },
      background-info:
        {
          heading: "पृष्ठभूमि की जानकारी",
          p: "कुल 18 गतिविधि आधारित HTML टेम्पलेट्स बनाए गए। अन्य 23 पाठ्यक्रम HTML टेम्पलेट्स बनाए गए।",
        },
      instructions:
        {
          heading: "निर्देश",
          li-1: "यह सुनिश्चित करने के लिए कि आप ग्रेड प्राप्त करने के मानदंड को समझते हैं, रूब्रिक की समीक्षा करें।",
          li-2: "कार्य पूरा करें.",
        },
      rubric: "संबंधित रूब्रिक की समीक्षा करें",
      assignment: "असाइनमेंट सबमिशन पेज पर पहुँचें",
    },
  zh:
    {
      getting-started:
        {
          heading: "入门",
          p-1: "这是为印第安纳卫斯理大学教学设计团队创建的 HTML 模板之一的示例。这些模板为学生所修的所有课程提供了统一的内容。",
          p-2: "成功完成此任务后，您将能够：",
          li-1: "利用基于作业活动的 HTML 模板",
          li-2: "构建课程内容",
        },
      background-info:
        {
          heading: "背景信息",
          p: "共创建了 18 个基于活动的 HTML 模板。另有 23 个教学大纲 HTML 模板。",
        },
      instructions:
        {
          heading: "指示",
          li-1: "查看评分标准以确保您了解获得成绩的标准。",
          li-2: "完成任務。",
        },
      rubric: "查看相关评分标准",
      assignment: "进入作业提交页面",
    },
}
</i18n>
