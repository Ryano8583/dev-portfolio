<script setup lang="ts">
import { useI18n } from "vue-i18n";

import BaseTabMenu from "./components/BaseTabMenu.vue";
import LayoutColumn from "@/components/LayoutColumn.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <LayoutColumn>
    <BaseTabMenu tab-count="4">
      <template #headingOne>{{ t("tab-1.heading-1") }}</template>
      <template #headingTwo>{{ t("tab-1.heading-2") }}</template>
      <template #headingThree>{{ t("tab-1.heading-3") }}</template>
      <template #headingFour>{{ t("tab-1.heading-4") }}</template>

      <template #panelOne>
        <p>
          {{ t("tab-1.panel-1") }}
        </p>
      </template>
      <template #panelTwo>
        <p>
          {{ t("tab-1.panel-2.p-1") }}
        </p>
        <p>
          {{ t("tab-1.panel-2.p-2") }}
        </p>
      </template>
      <template #panelThree>
        <p>
          {{ t("tab-1.panel-3") }}
        </p>
      </template>
      <template #panelFour>
        <p>
          {{ t("tab-1.panel-4.p-1") }}
        </p>
        <p>
          {{ t("tab-1.panel-4.p-2") }}
        </p>
      </template>
    </BaseTabMenu>

    <BaseTabMenu tab-count="3" use-vertical>
      <template #headingOne>{{ t("tab-2.heading-1") }}</template>
      <template #headingTwo>{{ t("tab-2.heading-2") }}</template>
      <template #headingThree>{{ t("tab-2.heading-3") }}</template>

      <template #panelOne>
        <p>
          {{ t("tab-2.panel-1.p-1") }}
        </p>
        <i18n-t tag="p" keypath="tab-2.panel-1.p-2">
          <a
            class="underline"
            href="https://webaim.org/resources/contrastchecker/"
            >{{ t("tab-2.panel-1.a") }}</a
          >
        </i18n-t>
        <p>
          {{ t("tab-2.panel-1.p-3") }}
        </p>
      </template>
      <template #panelTwo>
        <p>
          {{ t("tab-2.panel-2.p-1") }}
        </p>
        <p>
          {{ t("tab-2.panel-2.p-2") }}
        </p>
        <p>
          {{ t("tab-2.panel-2.p-3") }}
        </p>
        <p>
          {{ t("tab-2.panel-2.p-4") }}
        </p>
      </template>
      <template #panelThree>
        <p>
          {{ t("tab-2.panel-3.p-1") }}
        </p>
        <p>
          {{ t("tab-2.panel-3.p-2") }}
        </p>
        <p>
          {{ t("tab-2.panel-3.p-3") }}
        </p>
      </template>
    </BaseTabMenu>
  </LayoutColumn>
</template>

<i18n lang="yaml">
{
  en:
    {
      tab-1:
        {
          heading-1: "Importance of Accessibility",
          heading-2: "What is WCAG",
          heading-3: "Conformity",
          heading-4: "What it Means to me",
          panel-1: "The Internet is a resource that everyone has the right to freely and easily use. Unfortunately, most sites today are not accessible to people who have specific disabilities. At worst, this site will not be usable for the user, forcing them to leave the site and find another that is more adept to their needs.",
          panel-2:
            {
              p-1: "Web Content Accessibility Guidelines (WCAG) are a set of standards for web accessibility produced by the World Wide Web Consortium (W3C). The most current version of WCAG is 2.1.",
              p-2: "WCAG 2.1 has four main principles: perceivable, operable, understandable, and robust. There are over 70 standards for the guideline.",
            },
          panel-3: "There are three conformance levels for WCAG 2.1: A, AA, and AAA. Satisfying all Level A standards is the minimum level of conformance websites must meet. While meeting all Level AAA standards is the best outcome, it is only feasible for some websites.",
          panel-4:
            {
              p-1: "One of my top five personality traits is empathy. When I first learned about the methods some people with certain disabilities use to navigate the Internet and all the barriers they face when websites are not accessible to them, it struck a chord with me.",
              p-2: "Therefore, I have made it my goal to learn as much as possible about web accessibility to ensure the content I produce is accessible to all.",
            },
        },
      tab-2:
        {
          heading-1: "Contrast",
          heading-2: "Link Text",
          heading-3: "Keyboard",
          panel-1:
            {
              p-1: "Ensuring all colors on your site meet contrast standards is an easy way to improve its accessibility. There is one standard level for graphical objects and two levels for text. At the least, the lower standard level has to be met, though it is best to achieve the higher level whenever possible.",
              p-2: "There are many sites and resources you can use for checking color contrast. The one I prefer to use is {0}.",
              a: "WebAIM's Contrast Checker",
              p-3: "Meeting some WCAG standards is one of many benefits of improving your site's color contrast. It will also enhance the overall UI of your site.",
            },
          panel-2:
            {
              p-1: "Providing descriptive text for links so that they make sense out of context is another easy way to improve the accessibility of a site. Not only does having descriptive text make your content more legible, but it vastly benefits individuals using a screen reader.",
              p-2: 'A feature most screen readers have is the ability to state all the links on the current page. If all the links use general text, such as "click here" or "this page," the user will not know where they navigate.It is typical to see a site''s URL used for the link''s text. When a screen reader encounters this, it will read every character individually. Hearing this would not only be unpleasant, but it also does not help the user understand where it navigates.',
              p-3: "Hearing this would not only be unpleasant, but it also does not help the user understand where it navigates.",
              p-4: 'Tip: do not use the word "link" in the text for your link; screen readers say "link" before reading its text, so using it is unnecessary.',
            },
          panel-3:
            {
              p-1: "There are two main parts to make your site accessible for keyboard navigation.",
              p-2: 'The first part is to ensure that every interactive element is accessible via a keyboard. While all interactive HTML5 elements are inherently accessible, a site often uses a non-interactive element, such as a div, as a button. You must add the [tab-index="0"] attribute to the element to make it accessible via a keyboard.',
              p-3: "While making all interactive elements accessible via a keyboard is essential, it is not too helpful if the element's styling does not make it visually apparent when it is in focus. Therefore, the second part is to ensure the user's current focus on the page has the styling to be easily visible.",
            },
        },
    },
  es:
    {
      tab-1:
        {
          heading-1: "Importancia de la accesibilidad",
          heading-2: "¿Qué es WCAG?",
          heading-3: "Conformidad",
          heading-4: "Lo que Significa para mi",
          panel-1: "Internet es un recurso que todos tienen derecho a utilizar libremente y con facilidad. Lamentablemente, la mayoría de los sitios web actuales no son accesibles para personas con discapacidades específicas. En el peor de los casos, el sitio web no será utilizable por el usuario, lo que lo obligará a abandonarlo y buscar otro que se adapte mejor a sus necesidades.",
          panel-2:
            {
              p-1: "Las Pautas de Accesibilidad al Contenido Web (WCAG) son un conjunto de estándares de accesibilidad web elaborados por el Consorcio World Wide Web (W3C). La versión más actual de las WCAG es la 2.1.",
              p-2: "WCAG 2.1 tiene cuatro principios fundamentales: perceptible, operable, comprensible y sólido. Existen más de 70 estándares para esta directriz.",
            },
          panel-3: "Existen tres niveles de conformidad para WCAG 2.1: A, AA y AAA. El nivel mínimo de conformidad que deben cumplir los sitios web es el cumplimiento de todos los estándares de nivel A. Si bien el cumplimiento de todos los estándares de nivel AAA es el mejor resultado, solo es factible para algunos sitios web.",
          panel-4:
            {
              p-1: "Uno de mis cinco rasgos de personalidad más importantes es la empatía. Cuando me enteré de los métodos que utilizan algunas personas con ciertas discapacidades para navegar por Internet y de todas las barreras a las que se enfrentan cuando no pueden acceder a los sitios web, me cautivó.",
              p-2: "Por lo tanto, me he puesto como objetivo aprender lo más posible sobre accesibilidad web para garantizar que el contenido que produzco sea accesible para todos.",
            },
        },
      tab-2:
        {
          heading-1: "Contraste",
          heading-2: "Teclado",
          heading-3: "Teclado",
          panel-1:
            {
              p-1: "Asegurarse de que todos los colores de su sitio cumplan con los estándares de contraste es una manera sencilla de mejorar su accesibilidad. Existe un nivel estándar para objetos gráficos y dos niveles para texto. Como mínimo, se debe cumplir con el nivel estándar más bajo, aunque es mejor alcanzar el nivel más alto siempre que sea posible.",
              p-2: "Hay muchos sitios y recursos que puedes utilizar para comprobar el contraste de color. El que yo prefiero utilizar es el {0}.",
              a: "Verificador de contraste de WebAIM",
              p-3: "Cumplir con algunos estándares WCAG es uno de los muchos beneficios de mejorar el contraste de color de su sitio. También mejorará la interfaz de usuario general de su sitio.",
            },
          panel-2:
            {
              p-1: "Proporcionar un texto descriptivo para los enlaces, de modo que tengan sentido fuera de contexto, es otra forma sencilla de mejorar la accesibilidad de un sitio. Tener un texto descriptivo no solo hace que el contenido sea más legible, sino que también beneficia enormemente a las personas que usan un lector de pantalla.",
              p-2: 'Una característica que tienen la mayoría de los lectores de pantalla es la capacidad de indicar todos los enlaces de la página actual. Si todos los enlaces utilizan texto general, como "haga clic aquí" o "esta página", el usuario no sabrá a dónde se dirige. Es habitual ver que la URL de un sitio se utiliza como texto del enlace. Cuando un lector de pantalla se encuentra con esto, leerá cada carácter individualmente. Escuchar esto no solo sería desagradable, sino que tampoco ayuda al usuario a entender a dónde se dirige.',
              p-3: "Escuchar esto no solo sería desagradable, sino que tampoco ayuda al usuario a comprender hacia dónde navega.",
              p-4: 'Consejo: no utilice la palabra "enlace" en el texto de su enlace; los lectores de pantalla dicen "enlace" antes de leer su texto, por lo que su uso es innecesario.',
            },
          panel-3:
            {
              p-1: "Hay dos partes principales para hacer que su sitio sea accesible para la navegación mediante teclado.",
              p-2: 'La primera parte consiste en garantizar que todos los elementos interactivos sean accesibles mediante un teclado. Si bien todos los elementos interactivos de HTML5 son accesibles de forma inherente, un sitio suele utilizar un elemento no interactivo, como un div, como botón. Debe agregar el atributo [tab-index="0"] al elemento para que sea accesible mediante un teclado.',
              p-3: "Si bien es esencial que todos los elementos interactivos sean accesibles mediante un teclado, no resulta muy útil si el estilo del elemento no lo hace visible visualmente cuando está enfocado. Por lo tanto, la segunda parte es garantizar que el enfoque actual del usuario en la página tenga el estilo necesario para que sea fácilmente visible.",
            },
        },
    },
  fr:
    {
      tab-1:
        {
          heading-1: "Importance de l'accessibilité",
          heading-2: "Qu'est-ce que WCAG",
          heading-3: "Conformité",
          heading-4: "Ce que cela Signifie pour moi",
          panel-1: "Internet est une ressource que chacun a le droit d'utiliser librement et facilement. Malheureusement, la plupart des sites ne sont aujourd'hui pas accessibles aux personnes souffrant de handicaps spécifiques. Dans le pire des cas, ce site ne sera pas utilisable pour l'utilisateur, l'obligeant à quitter le site et à en trouver un autre plus adapté à ses besoins.",
          panel-2:
            {
              p-1: "Les directives pour l'accessibilité du contenu Web (WCAG) sont un ensemble de normes pour l'accessibilité du Web produites par le World Wide Web Consortium (W3C). La version la plus récente des WCAG est la 2.1.",
              p-2: "Les WCAG 2.1 reposent sur quatre principes fondamentaux : perceptible, exploitable, compréhensible et robuste. Il existe plus de 70 normes pour ces directives.",
            },
          panel-3: "Il existe trois niveaux de conformité pour WCAG 2.1 : A, AA et AAA. Le respect de toutes les normes de niveau A est le niveau minimum de conformité que les sites Web doivent respecter. Bien que le respect de toutes les normes de niveau AAA soit le meilleur résultat, cela n'est possible que pour certains sites Web.",
          panel-4:
            {
              p-1: "L’empathie est l’un de mes cinq principaux traits de personnalité. Lorsque j’ai découvert pour la première fois les méthodes utilisées par certaines personnes souffrant de certains handicaps pour naviguer sur Internet et tous les obstacles auxquels elles sont confrontées lorsque les sites Web ne leur sont pas accessibles, cela m’a touché.",
              p-2: "C’est pourquoi je me suis donné pour objectif d’en apprendre le plus possible sur l’accessibilité du Web afin de garantir que le contenu que je produis soit accessible à tous.",
            },
        },
      tab-2:
        {
          heading-1: "Contraste",
          heading-2: "Texte du lien",
          heading-3: "Clavier",
          panel-1:
            {
              p-1: "S'assurer que toutes les couleurs de votre site respectent les normes de contraste est un moyen simple d'améliorer son accessibilité. Il existe un niveau standard pour les objets graphiques et deux niveaux pour le texte. Au minimum, le niveau standard le plus bas doit être respecté, même s'il est préférable d'atteindre le niveau le plus élevé dans la mesure du possible.",
              p-2: "Il existe de nombreux sites et ressources que vous pouvez utiliser pour vérifier le contraste des couleurs. Celui que je préfère utiliser est {0}.",
              a: "Contrast Checker de WebAIM",
              p-3: "Le respect de certaines normes WCAG est l'un des nombreux avantages de l'amélioration du contraste des couleurs de votre site. Cela améliorera également l'interface utilisateur globale de votre site.",
            },
          panel-2:
            {
              p-1: "L'ajout d'un texte descriptif aux liens afin qu'ils aient du sens hors contexte est un autre moyen simple d'améliorer l'accessibilité d'un site. Non seulement le texte descriptif rend votre contenu plus lisible, mais il est également très utile aux personnes utilisant un lecteur d'écran.",
              p-2: "La plupart des lecteurs d'écran ont la possibilité d'indiquer tous les liens de la page actuelle. Si tous les liens utilisent un texte général, tel que « cliquez ici » ou « cette page », l'utilisateur ne saura pas où il navigue. Il est courant de voir l'URL d'un site utilisée pour le texte du lien. Lorsqu'un lecteur d'écran rencontre ce problème, il lit chaque caractère individuellement. Entendre cela serait non seulement désagréable, mais cela n'aide pas non plus l'utilisateur à comprendre où il navigue.",
              p-3: "Entendre cela serait non seulement désagréable, mais cela n'aide pas non plus l'utilisateur à comprendre où il navigue.",
              p-4: "Astuce : n'utilisez pas le mot « lien » dans le texte de votre lien ; les lecteurs d'écran disent « lien » avant de lire son texte, son utilisation est donc inutile.",
            },
          panel-3:
            {
              p-1: "Il y a deux parties principales pour rendre votre site accessible à la navigation au clavier.",
              p-2: 'La première étape consiste à s''assurer que chaque élément interactif est accessible via un clavier. Bien que tous les éléments HTML5 interactifs soient intrinsèquement accessibles, un site utilise souvent un élément non interactif, tel qu''un div, comme bouton. Vous devez ajouter l''attribut [tab-index="0"] à l''élément pour le rendre accessible via un clavier.',
              p-3: "Bien qu'il soit essentiel de rendre tous les éléments interactifs accessibles via un clavier, cela n'est pas très utile si le style de l'élément ne le rend pas visuellement apparent lorsqu'il est au premier plan. Par conséquent, la deuxième partie consiste à s'assurer que le focus actuel de l'utilisateur sur la page a le style pour être facilement visible.",
            },
        },
    },
  hi:
    {
      tab-1:
        {
          heading-1: "सुगम्यता का महत्व",
          heading-2: "WCAG क्या है?",
          heading-3: "अनुपालन",
          heading-4: "मेरे लिए इसका क्या मतलब है?",
          panel-1: "इंटरनेट एक ऐसा संसाधन है जिसका हर किसी को स्वतंत्र रूप से और आसानी से उपयोग करने का अधिकार है। दुर्भाग्य से, आज अधिकांश साइटें उन लोगों के लिए सुलभ नहीं हैं जो विशिष्ट विकलांगताओं से ग्रस्त हैं। सबसे बुरी बात यह है कि यह साइट उपयोगकर्ता के लिए उपयोग करने योग्य नहीं होगी, जिससे उन्हें साइट छोड़ने और अपनी ज़रूरतों के लिए अधिक उपयुक्त दूसरी साइट खोजने के लिए मजबूर होना पड़ेगा।.",
          panel-2:
            {
              p-1: "वेब सामग्री अभिगम्यता दिशानिर्देश (WCAG) वर्ल्ड वाइड वेब कंसोर्टियम (W3C) द्वारा निर्मित वेब अभिगम्यता के लिए मानकों का एक सेट है। WCAG का सबसे वर्तमान संस्करण 2.1 है।",
              p-2: "WCAG 2.1 के चार मुख्य सिद्धांत हैं: बोधगम्य, संचालन योग्य, समझने योग्य और मजबूत। दिशानिर्देश के लिए 70 से अधिक मानक हैं।",
            },
          panel-3: "WCAG 2.1 के लिए तीन अनुरूपता स्तर हैं: A, AA, और AAA। सभी स्तर A मानकों को पूरा करना अनुरूपता का न्यूनतम स्तर है जिसे वेबसाइटों को पूरा करना होगा। जबकि सभी स्तर AAA मानकों को पूरा करना सबसे अच्छा परिणाम है, यह केवल कुछ वेबसाइटों के लिए ही संभव है।",
          panel-4:
            {
              p-1: "मेरे व्यक्तित्व के पाँच सबसे बेहतरीन गुणों में से एक है सहानुभूति। जब मैंने पहली बार कुछ विकलांग लोगों द्वारा इंटरनेट पर नेविगेट करने के लिए इस्तेमाल किए जाने वाले तरीकों के बारे में जाना और जब वेबसाइट उनके लिए सुलभ नहीं होती तो उन्हें किन बाधाओं का सामना करना पड़ता है, तो यह बात मेरे दिल को छू गई।",
              p-2: "इसलिए, मैंने यह लक्ष्य बनाया है कि मैं वेब एक्सेसिबिलिटी के बारे में अधिक से अधिक सीखूं ताकि यह सुनिश्चित हो सके कि मेरे द्वारा तैयार की गई सामग्री सभी के लिए सुलभ हो।",
            },
        },
      tab-2:
        {
          heading-1: "अंतर",
          heading-2: "लिंक पाठ",
          heading-3: "कीबोर्ड",
          panel-1:
            {
              p-1: "यह सुनिश्चित करना कि आपकी साइट पर सभी रंग कंट्रास्ट मानकों को पूरा करते हैं, इसकी पहुँच को बेहतर बनाने का एक आसान तरीका है। ग्राफ़िकल ऑब्जेक्ट के लिए एक मानक स्तर और टेक्स्ट के लिए दो स्तर हैं। कम से कम, निम्न मानक स्तर को पूरा किया जाना चाहिए, हालाँकि जब भी संभव हो उच्च स्तर को प्राप्त करना सबसे अच्छा है।",
              p-2: "रंग कंट्रास्ट की जांच के लिए आप कई साइटों और संसाधनों का उपयोग कर सकते हैं। मैं {0} उपयोग करना पसंद करता हूँ।",
              a: "WebAIM के कंट्रास्ट चेकर का",
              p-3: "कुछ WCAG मानकों को पूरा करना आपकी साइट के रंग कंट्रास्ट को बेहतर बनाने के कई लाभों में से एक है। यह आपकी साइट के समग्र UI को भी बेहतर बनाएगा।",
            },
          panel-2:
            {
              p-1: "लिंक के लिए वर्णनात्मक टेक्स्ट प्रदान करना ताकि वे संदर्भ से बाहर अर्थपूर्ण हों, साइट की पहुँच को बेहतर बनाने का एक और आसान तरीका है। वर्णनात्मक टेक्स्ट होने से न केवल आपकी सामग्री अधिक सुपाठ्य बनती है, बल्कि यह स्क्रीन रीडर का उपयोग करने वाले व्यक्तियों को बहुत लाभ पहुँचाता है।",
              p-2: 'अधिकांश स्क्रीन रीडर्स में एक विशेषता यह होती है कि वे वर्तमान पृष्ठ पर सभी लिंक्स को दर्शाने में सक्षम होते हैं। यदि सभी लिंक्स में सामान्य टेक्स्ट का उपयोग किया जाता है, जैसे कि "यहाँ क्लिक करें" या "यह पृष्ठ", तो उपयोगकर्ता को यह पता नहीं चलेगा कि वे कहाँ नेविगेट कर रहे हैं। लिंक के टेक्स्ट के लिए साइट के URL का उपयोग किया जाना आम बात है। जब स्क्रीन रीडर को यह मिलता है, तो वह प्रत्येक अक्षर को अलग-अलग पढ़ेगा। यह सुनना न केवल अप्रिय होगा, बल्कि यह उपयोगकर्ता को यह समझने में भी मदद नहीं करेगा कि वह कहाँ नेविगेट कर रहा है।',
              p-3: "यह सुनना न केवल अप्रिय होगा, बल्कि इससे उपयोगकर्ता को यह समझने में भी मदद नहीं मिलेगी कि यह कहां नेविगेट करता है",
              p-4: 'टिप: अपने लिंक के लिए पाठ में "लिंक" शब्द का प्रयोग न करें; स्क्रीन रीडर पाठ को पढ़ने से पहले "लिंक" कहता है, इसलिए इसका प्रयोग अनावश्यक है।',
            },
          panel-3:
            {
              p-1: "आपकी साइट को कीबोर्ड नेविगेशन के लिए सुलभ बनाने के दो मुख्य भाग हैं।",
              p-2: 'पहला भाग यह सुनिश्चित करना है कि प्रत्येक इंटरैक्टिव तत्व कीबोर्ड के माध्यम से सुलभ हो। जबकि सभी इंटरैक्टिव HTML5 तत्व स्वाभाविक रूप से सुलभ हैं, एक साइट अक्सर एक गैर-इंटरैक्टिव तत्व, जैसे कि div, को बटन के रूप में उपयोग करती है। आपको कीबोर्ड के माध्यम से इसे सुलभ बनाने के लिए तत्व में [tab-index="0"] विशेषता जोड़नी होगी।',
              p-3: "कीबोर्ड के ज़रिए सभी इंटरैक्टिव तत्वों को सुलभ बनाना ज़रूरी है, लेकिन अगर तत्व की स्टाइलिंग फ़ोकस में होने पर उसे स्पष्ट रूप से स्पष्ट नहीं करती है, तो यह बहुत मददगार नहीं है। इसलिए, दूसरा भाग यह सुनिश्चित करना है कि पेज पर उपयोगकर्ता के मौजूदा फ़ोकस में स्टाइलिंग आसानी से दिखाई दे।",
            },
        },
    },
  zh:
    {
      tab-1:
        {
          heading-1: "可访问性的重要性",
          heading-2: "什么是 WCAG",
          heading-3: "这对我意味着什么",
          heading-4: "方法",
          panel-1: "互联网是每个人都有权自由轻松使用的资源。不幸的是，当今大多数网站都无法供有特定残疾的人使用。最糟糕的情况是，该网站将无法供用户使用，迫使他们离开该网站并寻找另一个更适合他们需求的网站",
          panel-2:
            {
              p-1: "Web 内容可访问性指南 (WCAG) 是万维网联盟 (W3C) 制定的一套 Web 可访问性标准。WCAG 的最新版本为 2.1。",
              p-2: "WCAG 2.1 有四大原则：可感知、可操作、可理解、健壮性，该指南包含 70 多项标准。",
            },
          panel-3: "WCAG 2.1 有三个一致性级别：A、AA 和 AAA。满足所有 A 级标准是网站必须满足的最低一致性级别。虽然满足所有 AAA 级标准是最好的结果，但这只对部分网站可行。",
          panel-4:
            {
              p-1: "我最喜欢的五大性格特征之一是同理心。当我第一次了解到某些残障人士上网的方式以及他们在无法访问网站时面临的所有障碍时，我深有感触。",
              p-2: "因此，我的目标是尽可能多地了解网络可访问性，以确保我制作的内容可供所有人访问。",
            },
        },
      tab-2:
        {
          heading-1: "对比",
          heading-2: "链接文本",
          heading-3: "键盘",
          panel-1:
            {
              p-1: "确保网站上的所有颜色都符合对比度标准是提高网站可访问性的简单方法。图形对象有一个标准级别，文本有两个标准级别。至少要满足较低的标准级别，但最好尽可能达到较高的标准级别。",
              p-2: "您可以使用许多网站和资源来检查颜色对比度。我更喜欢使用 {0}。",
              a: "WebAIM 的对比度检查器",
              p-3: "满足某些 WCAG 标准是改善网站颜色对比度的众多好处之一。它还将增强网站的整体 UI。",
            },
          panel-2:
            {
              p-1: "为链接提供描述性文字，使其脱离上下文也能理解，这是提高网站可访问性的另一种简单方法。描述性文字不仅能让您的内容更易读，而且对使用屏幕阅读器的用户大有裨益。",
              p-2: "大多数屏幕阅读器都具有一项功能，即能够列出当前页面上的所有链接。如果所有链接都使用一般文本，例如“单击此处”或“此页面”，则用户将不知道他们导航到哪里。通常，链接文本会使用网站的 URL。当屏幕阅读器遇到这种情况时，它会逐个读取每个字符。听到这种情况不仅会让人不愉快，而且也无助于用户了解导航到哪里。",
              p-3: "听到这种话不仅会让人不愉快，而且还无助于用户了解导航到哪里。",
              p-4: "提示：不要在文本中使用“链接”一词来表示链接；屏幕阅读器在阅读文本之前会说“链接”，因此没有必要使用它。",
            },
          panel-3:
            {
              p-1: "有两个主要部分可以使您的网站可通过键盘导航访问。",
              p-2: '第一部分是确保每个交互式元素都可以通过键盘访问。虽然所有交互式 HTML5 元素本质上都是可访问的，但网站经常使用非交互式元素（例如 div）作为按钮。您必须向元素添加 [tab-index="0"] 属性，使其可以通过键盘访问。',
              p-3: "虽然让所有交互元素都可以通过键盘访问至关重要，但如果元素的样式在聚焦时无法使其在视觉上清晰可见，那么这样做就没什么用。因此，第二部分是确保用户当前聚焦的页面具有易于看到的样式。",
            },
        },
    },
}
</i18n>
