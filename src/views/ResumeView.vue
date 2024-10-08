<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import { observerHeadings } from "@/composables/intersectionObserver";

import LayoutColumn from "@/components/LayoutColumn.vue";
import LayoutSection from "@/components/LayoutSection.vue";

import TheMain from "@/components/TheMain.vue";

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
    <LayoutSection id="section-1" :heading="t('section-1.title')" use-blue>
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <p>{{ t("section-1.p-name") }}</p>
        <p>ryano8583@gmail.com</p>
      </div>
    </LayoutSection>

    <LayoutSection id="section-2" :heading="t('section-2.title')" use-green>
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <p>{{ t("section-2.p-school") }}</p>
        <p>{{ t("section-2.p-location") }}</p>
        <p>{{ t("section-2.p-degree") }}</p>
      </div>
    </LayoutSection>

    <LayoutSection id="section-3" :heading="t('section-3.title')" use-purple>
      <LayoutColumn
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <div v-for="x of 5">
          <p>{{ t(`section-3.p-company-${x}`) }}</p>
          <p>{{ t(`section-3.p-location-${x}`) }}</p>
          <p>
            {{
              x === 1
                ? `${$d(new Date("2017-11-02"), "short")} - ${t("section-3.p-time-frame-end-1")}`
                : x === 2
                  ? `${$d(new Date("2017-03-02"), "short")} - ${$d(new Date("2017-11-02"), "short")}`
                  : x === 3
                    ? `${$d(new Date("2013-03-02"), "short")} - ${$d(new Date("2017-03-02"), "short")}`
                    : x === 4
                      ? `${$d(new Date("2016-07-02"), "short")} - ${$d(new Date("2016-10-02"), "short")}`
                      : `${$d(new Date("2015-05-02"), "short")} - ${$d(new Date("2015-06-02"), "short")}`
            }}
          </p>
          <p>{{ t(`section-3.p-title-${x}`) }}</p>
        </div>
      </LayoutColumn>
    </LayoutSection>

    <LayoutSection
      id="section-4"
      :heading="t('section-4.title')"
      use-orange
      word-break
    >
      <div
        class="opacity-0 translate-y-48 transition-fade duration-200"
        data-transitional-content
      >
        <ul class="pl-4 list-inside list-disc">
          <i18n-t tag="li" keypath="section-4.li-1">
            <ul class="pl-4 list-inside list-[circle]">
              <li>
                {{ t("section-4.li-1-1") }}
              </li>
              <li>
                {{ t("section-4.li-1-2") }}
              </li>
            </ul>
          </i18n-t>
          <li>
            {{ t("section-4.li-2") }}
          </li>
          <i18n-t tag="li" keypath="section-4.li-3">
            <ul class="pl-4 list-inside list-[circle]">
              <li>{{ t("section-4.li-3-1") }}</li>
            </ul>
          </i18n-t>
          <i18n-t tag="li" keypath="section-4.li-4">
            <ul class="pl-4 list-inside list-[circle]">
              <li>
                {{ t("section-4.li-4-1") }}
              </li>
              <li>
                {{ t("section-4.li-4-2") }}
              </li>
            </ul>
          </i18n-t>
        </ul>
      </div>
    </LayoutSection>
  </TheMain>
</template>

<i18n lang="yaml">
{
  en:
    {
      section-1: { title: "Contact", p-name: "Ryan Overmyer" },
      section-2:
        {
          title: "Education",
          p-school: "Indiana Wesleyan University",
          p-location: "Marion, IN 46953",
          p-degree: "Bachelor of Science: Marketing",
        },
      section-3:
        {
          title: "Work Experience",

          p-company-1: "Information Technology",
          p-location-1: "Indiana Wesleyan University",
          p-time-frame-end-1: "Present",
          p-title-1: "LMS Administrator",

          p-company-2: "Information Technology",
          p-location-2: "Indiana Wesleyan University",
          p-title-2: "LMS Administrator Assistant",

          p-company-3: "Facilities Services",
          p-location-3: "Indiana Wesleyan University",
          p-title-3: "Assistant to Business Manager",

          p-company-4: "Liberty National Life Insurance",
          p-location-4: "Carmel, IN 46032",
          p-title-4: "Sales Representative",

          p-company-5: "Coldwell Banker Preferred Realtors: The Packer Group",
          p-location-5: "Plymouth, MI 48170",
          p-title-5: "Marketing/Realtor Intern",
        },
      section-4:
        {
          title: "Accomplishments",
          li-1: "Created 41 HTML template files and six custom content items used for providing coursework{0}",
          li-1-1: "Together, all the content meets 31 WCAG 2.1 accessibility standards and violates none",
          li-1-2: 'You can review one of the HTML templates and all six of the custom content items on the "Portfolio" page of this site',
          li-2: "Built two widgets to automate manual processes, both of which use multiple API fetch calls",
          li-3: "Led the development of the UI for the new Distributed Web Apps project{0}",
          li-3-1: "Created 28 components",
          li-4: "Assisted with the development of software that integrates the enterprise system with the learning management system to automate the creation and management of courses and users{0}",
          li-4-1: "The software was complex to develop given all the inner workings and possible scenarios that can occur related to courses, registration of students, and assigning of faculty",
          li-4-2: "Made the testing plan for all the various scenarios, which ended up being a 31-page long document",
        },
    },
  es:
    {
      section-1: { title: "Contacto", p-name: "Ryan Overmyer" },
      section-2:
        {
          title: "Educación",
          p-school: "Universidad Wesleyana de Indiana",
          p-location: "Marion, IN 46953",
          p-degree: "Licenciatura en Ciencias: Marketing",
        },
      section-3:
        {
          title: "Experiencia laboral",

          p-company-1: "Tecnologías de la Información",
          p-location-1: "Universidad Wesleyana de Indiana",
          p-time-frame-end-1: "Presente",
          p-title-1: "Administrador de LMS",

          p-company-2: "Tecnologías de la Información",
          p-location-2: "Universidad Wesleyana de Indiana",
          p-title-2: "Asistente de Administración de LMS",

          p-company-3: "Servicios de Instalaciones",
          p-location-3: "Universidad Wesleyana de Indiana",
          p-title-3: "Asistente del Gerente Comercial",

          p-company-4: "Seguro de Vida Nacional Liberty",
          p-location-4: "Carmel, IN 46032",
          p-title-4: "Representante de Ventas",

          p-company-5: "Agentes Inmobiliarios Preferidos de Coldwell Banker: The Packer Group",
          p-location-5: "Plymouth, Michigan 48170",
          p-title-5: "Pasante de Marketing/agente Inmobiliario",
        },
      section-4:
        {
          title: "Logros",
          li-1: "Se crearon 41 archivos de plantilla HTML y seis elementos de contenido personalizados que se utilizan para proporcionar cursos.{0}",
          li-1-1: "En conjunto, todo el contenido cumple con 31 estándares de accesibilidad WCAG 2.1 y no viola ninguno.",
          li-1-2: 'Puede revisar una de las plantillas HTML y los seis elementos de contenido personalizados en la página "Portafolio" de este sitio.',
          li-2: "Creé dos widgets para automatizar procesos manuales, ambos utilizan múltiples llamadas de búsqueda de API",
          li-3: "Lideró el desarrollo de la interfaz de usuario para el nuevo proyecto de aplicaciones web distribuidas.{0}",
          li-3-1: "Se crearon 28 componentes",
          li-4: "Ayudó en el desarrollo de software que integra el sistema empresarial con el sistema de gestión de aprendizaje para automatizar la creación y gestión de cursos y usuarios.{0}",
          li-4-1: "El software fue complejo de desarrollar dado todo el funcionamiento interno y los posibles escenarios que pueden ocurrir relacionados con los cursos, el registro de estudiantes y la asignación de profesores.",
          li-4-2: "Elaboré el plan de pruebas para todos los distintos escenarios, que terminó siendo un documento de 31 páginas.",
        },
    },
  fr:
    {
      section-1: { title: "Contact", p-name: "Ryan Overmyer" },
      section-2:
        {
          title: "Éducation",
          p-school: "Université Wesleyenne de l'Indiana",
          p-location: "Marion, IN 46953",
          p-degree: "Baccalauréat ès Sciences : Marketing",
        },
      section-3:
        {
          title: "L'expérience Professionnelle",

          p-company-1: "Informatique",
          p-location-1: "Université Wesleyenne de l'Indiana",
          p-time-frame-end-1: "Présent",
          p-title-1: "Administrateur LMS",

          p-company-2: "Informatique",
          p-location-2: "Université Wesleyenne de l'Indiana",
          p-title-2: "Assistant Administrateur LMS",

          p-company-3: "Services des installations",
          p-location-3: "Université Wesleyenne de l'Indiana",
          p-title-3: "Assistante du Directeur Commercial",

          p-company-4: "Assurance-vie Liberty National",
          p-location-4: "Carmel, IN 46032",
          p-title-4: "Représentant des Ventes",

          p-company-5: "Agents Immobiliers Préférés de Coldwell Banker : The Packer Group",
          p-location-5: "Plymouth, Michigan 48170",
          p-title-5: "Stagiaire en marketing/agent Immobilier",
        },
      section-4:
        {
          title: "Réalisations",
          li-1: "Création de 41 fichiers de modèles HTML et de six éléments de contenu personnalisés utilisés pour fournir des cours{0}",
          li-1-1: "Ensemble, tout le contenu répond aux 31 normes d'accessibilité WCAG 2.1 et n'en viole aucune.",
          li-1-2: "Vous pouvez consulter l'un des modèles HTML et les six éléments de contenu personnalisés sur la page « Portfolio » de ce site",
          li-2: "J'ai créé deux widgets pour automatiser les processus manuels, tous deux utilisant plusieurs appels de récupération d'API",
          li-3: "J'ai dirigé le développement de l'interface utilisateur du nouveau projet d'applications Web distribuées{0}",
          li-3-1: "28 composants créés",
          li-4: "A aidé au développement d'un logiciel qui intègre le système d'entreprise au système de gestion de l'apprentissage pour automatiser la création et la gestion des cours et des utilisateurs{0}",
          li-4-1: "Le logiciel était complexe à développer étant donné tous les rouages ​​internes et les scénarios possibles qui peuvent se produire en rapport avec les cours, l'inscription des étudiants et l'affectation des professeurs",
          li-4-2: "J'ai élaboré le plan de test pour tous les différents scénarios, qui a fini par être un document de 31 pages.",
        },
    },
  hi:
    {
      section-1: { title: "संपर्क", p-name: "रयान ओवरमायर" },
      section-2:
        {
          title: "शिक्षा",
          p-school: "इंडियाना वेस्लेयन विश्वविद्यालय",
          p-location: "मैरियन, IN 46953",
          p-degree: "विज्ञान स्नातक: विपणन",
        },
      section-3:
        {
          title: "कार्य अनुभव",

          p-company-1: "सूचान प्रौद्योगिकी",
          p-location-1: "इंडियाना वेस्लेयन विश्वविद्यालय",
          p-time-frame-end-1: "वर्तमान",
          p-title-1: "एलएमएस प्रशासक",

          p-company-2: "सूचान प्रौद्योगिकी",
          p-location-2: "इंडियाना वेस्लेयन विश्वविद्यालय",
          p-title-2: "एलएमएस प्रशासक सहायक",

          p-company-3: "सुविधाएँ और सेवाएं",
          p-location-3: "इंडियाना वेस्लेयन विश्वविद्यालय",
          p-title-3: "व्यवसाय प्रबंधक का सहायक",

          p-company-4: "लिबर्टी नेशनल लाइफ इंश्योरेंस",
          p-location-4: "कार्मेल, आईएन 46032",
          p-title-4: "बिक्री प्रतिनिधि",

          p-company-5: "कोल्डवेल बैंकर पसंदीदा रियलटर्स: द पैकर ग्रुप",
          p-location-5: "प्लायमाउथ, एमआई 48170",
          p-title-5: "मार्केटिंग/रियल्टर इंटर्न",
        },
      section-4:
        {
          title: "उपलब्धियां",
          li-1: "41 HTML टेम्पलेट फ़ाइलें और छह कस्टम सामग्री आइटम बनाए गए जिनका उपयोग कोर्सवर्क प्रदान करने के लिए किया गया{0}",
          li-1-1: "कुल मिलाकर, सभी सामग्री 31 WCAG 2.1 पहुँच-योग्यता मानकों को पूरा करती है और किसी भी मानक का उल्लंघन नहीं करती है।",
          li-1-2: 'आप इस साइट के "पोर्टफोलियो" पृष्ठ पर HTML टेम्पलेट्स में से किसी एक और सभी छह कस्टम सामग्री आइटमों की समीक्षा कर सकते हैं',
          li-2: "मैन्युअल प्रक्रियाओं को स्वचालित करने के लिए दो विजेट बनाए गए, जिनमें से दोनों ही कई API फ़ेच कॉल का उपयोग करते हैं",
          li-3: "नए वितरित वेब ऐप प्रोजेक्ट के लिए UI के विकास का नेतृत्व किया{0}",
          li-3-1: "28 घटक बनाए गए",
          li-4: "ऐसे सॉफ्टवेयर के विकास में सहायता की जो उद्यम प्रणाली को शिक्षण प्रबंधन प्रणाली के साथ एकीकृत करता है ताकि पाठ्यक्रमों और उपयोगकर्ताओं के निर्माण और प्रबंधन को स्वचालित किया जा सके{0}",
          li-4-1: "सॉफ्टवेयर को विकसित करना जटिल था क्योंकि इसमें पाठ्यक्रमों, छात्रों के पंजीकरण और शिक्षकों की नियुक्ति से संबंधित सभी आंतरिक कार्यप्रणाली और संभावित परिदृश्य शामिल थे।",
          li-4-2: "सभी विभिन्न परिदृश्यों के लिए परीक्षण योजना बनाई गई, जो अंततः 31 पृष्ठ लंबा दस्तावेज़ बन गया",
        },
    },
  zh:
    {
      section-1: { title: "接触", p-name: "瑞安·奥弗迈尔" },
      section-2:
        {
          title: "教育",
          p-school: "印第安纳卫斯理大学",
          p-location: "马里恩，印第安纳州 46953",
          p-degree: "理学学士：市场营销",
        },
      section-3:
        {
          title: "工作经验",

          p-company-1: "信息技术",
          p-location-1: "印第安纳卫斯理大学",
          p-time-frame-end-1: "至今",
          p-title-1: "LMS 管理员",

          p-company-2: "信息技术",
          p-location-2: "印第安纳卫斯理大学",
          p-title-2: "LMS 管理员助理",

          p-company-3: "设施服务",
          p-location-3: "印第安纳卫斯理大学",
          p-title-3: "商务经理助理",

          p-company-4: "自由国民人寿保险公司",
          p-location-4: "卡梅尔，印第安纳州 46032",
          p-title-4: "销售代表",

          p-company-5: "Coldwell Banker 首选房地产经纪人：The Packer Group",
          p-location-5: "普利茅斯，密歇根州 48170",
          p-title-5: "营销/房地产经纪人实习生",
        },
      section-4:
        {
          title: "成就",
          li-1: "创建了 41 个 HTML 模板文件和 6 个自定义内容项，用于提供课程作业{0}",
          li-1-1: "总的来说，所有内容均符合 31 项 WCAG 2.1 可访问性标准，且未违反任何标准",
          li-1-2: "您可以在此网站的“作品集”页面上查看其中一个 HTML 模板和所有六个自定义内容项",
          li-2: "构建了两个小部件来自动化手动流程，这两个小部件都使用多个 API 获取调用",
          li-3: "领导新分布式 Web 应用程序项目的 UI 开发{0}",
          li-3-1: "创建了 28 个组件",
          li-4: "协助开发将企业系统与学习管理系统集成的软件，以自动创建和管理课程和用户{0}",
          li-4-1: "考虑到所有内部运作以及可能发生的与课程、学生注册和教师分配相关的场景，该软件的开发非常复杂",
          li-4-2: "制定了各种场景的测试计划，最终形成了一份长达 31 页的文档",
        },
    },
}
</i18n>
