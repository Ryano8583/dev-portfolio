<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LayoutCollapsible from "./components/LayoutCollapsible.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <LayoutCollapsible id="collapsible-one">
    <template #heading>{{ t("heading") }}</template>
    <p>
      {{ t("p") }}
    </p>
  </LayoutCollapsible>
</template>

<i18n lang="yaml">
{
  en:
    {
      heading: "Current Position's Responsibilities",
      p: "Creating custom content items for courses is only part of my responsibilities in my current position. My primary duty is administering the university's Learning Management System (LMS). The responsibilities include maintaining the organizational structure, user roles and permissions, and third-party integrations.",
    },
  es:
    {
      heading: "Responsabilidades del puesto actual",
      p: "La creación de elementos de contenido personalizados para los cursos es solo una parte de mis responsabilidades en mi puesto actual. Mi deber principal es administrar el sistema de gestión del aprendizaje de la universidad. Las responsabilidades incluyen el mantenimiento de la estructura organizativa, los roles y permisos de los usuarios y las integraciones con terceros.",
    },
  fr:
    {
      heading: "Responsabilités du poste actuel",
      p: "La création d'éléments de contenu personnalisés pour les cours n'est qu'une partie de mes responsabilités dans mon poste actuel. Ma tâche principale consiste à administrer le système de gestion de l'apprentissage de l'université. Les responsabilités comprennent la maintenance de la structure organisationnelle, les rôles et autorisations des utilisateurs et les intégrations tierces.",
    },
  hi:
    {
      heading: "वर्तमान पद की जिम्मेदारियां",
      p: "पाठ्यक्रमों के लिए कस्टम सामग्री आइटम बनाना मेरी वर्तमान स्थिति में मेरी जिम्मेदारियों का केवल एक हिस्सा है। मेरा प्राथमिक कर्तव्य विश्वविद्यालय के लर्निंग मैनेजमेंट सिस्टम का प्रबंधन करना है। जिम्मेदारियों में संगठनात्मक संरचना, उपयोगकर्ता भूमिकाएँ और अनुमतियाँ, और तृतीय-पक्ष एकीकरण बनाए रखना शामिल है।",
    },
  zh:
    {
      heading: "现任职位职责",
      p: "为课程创建自定义内容项目只是我目前职位职责的一部分。我的主要职责是管理大学的学习管理系统。职责包括维护组织结构、用户角色和权限以及第三方集成。",
    },
}
</i18n>
