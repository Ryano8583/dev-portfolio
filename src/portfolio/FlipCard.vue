<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BaseFlipCard from "./components/BaseFlipCard.vue";

const { t } = useI18n({
  useScope: "local",
});
</script>

<template>
  <BaseFlipCard
    :heading-front="t('heading-front')"
    :heading-back="t('heading-back')"
  >
    <template #front-content>
      <p>
        {{ t("p-front") }}
      </p>
    </template>
    <template #back-content>
      <p>
        {{ t("p-1-back") }}
      </p>
      <p>
        {{ t("p-2-back") }}
      </p>
    </template>
  </BaseFlipCard>
</template>

<i18n lang="yaml">
{
  en:
    {
      heading-front: "Light Mode",
      heading-back: "Dark Mode",
      p-front: "Most websites and apps only support light mode. Traditionally, this is how applications were all built. As people spend more and more of their days looking at a screen, the need for apps to include dark mode support is rising. Staring at apps with primarily white and light colors for an extended period causes eye strain.",
      p-1-back: "Integrating dark mode into an application takes some leg work. Remembering that darker colors must also meet WCAG color contrast standards is essential.",
      p-2-back: "Preferably, the app will follow a user's device setting for which display mode it enables by default. Nonetheless, the app should allow users to toggle between the display modes.",
    },
  es:
    {
      heading-front: "Modo Claro",
      heading-back: "Modo Oscuro",
      p-front: "La mayoría de los sitios web y aplicaciones solo admiten el modo claro. Tradicionalmente, así es como se creaban todas las aplicaciones. A medida que las personas pasan cada vez más tiempo frente a una pantalla, aumenta la necesidad de que las aplicaciones incluyan compatibilidad con el modo oscuro. Mirar fijamente aplicaciones con colores principalmente blancos y claros durante un período prolongado provoca fatiga visual.",
      p-1-back: "Integrar el modo oscuro en una aplicación requiere algo de trabajo. Es fundamental recordar que los colores más oscuros también deben cumplir con los estándares de contraste de color WCAG.",
      p-2-back: "Lo ideal es que la aplicación siga la configuración del dispositivo del usuario para determinar qué modo de visualización activa de forma predeterminada. No obstante, la aplicación debería permitir a los usuarios alternar entre los modos de visualización.",
    },
  fr:
    {
      heading-front: "Mode Lumière",
      heading-back: "Mode Sombre",
      p-front: "La plupart des sites Web et des applications ne prennent en charge que le mode clair. Traditionnellement, c'est ainsi que les applications étaient toutes conçues. Comme les gens passent de plus en plus de temps à regarder un écran, la nécessité pour les applications d'inclure la prise en charge du mode sombre augmente. Regarder des applications avec principalement des couleurs blanches et claires pendant une période prolongée provoque une fatigue oculaire.",
      p-1-back: "L'intégration du mode sombre dans une application nécessite un certain travail. Il est essentiel de se rappeler que les couleurs plus sombres doivent également respecter les normes de contraste des couleurs WCAG.",
      p-2-back: "Idéalement, l'application suivra les paramètres de l'appareil de l'utilisateur pour savoir quel mode d'affichage elle active par défaut. Néanmoins, l'application doit permettre aux utilisateurs de basculer entre les modes d'affichage.",
    },
  hi:
    {
      heading-front: "लाइट मोड",
      heading-back: "डार्क मोड",
      p-front: "ज़्यादातर वेबसाइट और ऐप सिर्फ़ लाइट मोड को सपोर्ट करते हैं। परंपरागत रूप से, सभी एप्लिकेशन इसी तरह बनाए जाते थे। जैसे-जैसे लोग अपना ज़्यादातर दिन स्क्रीन पर देखते हुए बिताते हैं, वैसे-वैसे ऐप में डार्क मोड सपोर्ट शामिल करने की ज़रूरत बढ़ती जा रही है। लंबे समय तक मुख्य रूप से सफ़ेद और हल्के रंगों वाले ऐप को देखने से आँखों पर ज़ोर पड़ता है।",
      p-1-back: "किसी एप्लिकेशन में डार्क मोड को एकीकृत करने के लिए कुछ मेहनत करनी पड़ती है। यह याद रखना ज़रूरी है कि गहरे रंगों को WCAG कलर कॉन्ट्रास्ट मानकों को भी पूरा करना चाहिए।",
      p-2-back: "अधिमानतः, ऐप उपयोगकर्ता की डिवाइस सेटिंग का पालन करेगा जिसके लिए यह डिफ़ॉल्ट रूप से कौन सा डिस्प्ले मोड सक्षम करता है। फिर भी, ऐप को उपयोगकर्ताओं को डिस्प्ले मोड के बीच टॉगल करने की अनुमति देनी चाहिए।",
    },
  zh:
    {
      heading-front: "灯光模式",
      heading-back: "暗黑模式",
      p-front: "大多数网站和应用仅支持浅色模式。传统上，所有应用都是这样构建的。随着人们每天花越来越多的时间盯着屏幕，应用支持暗色模式的需求正在上升。长时间盯着以白色和浅色为主的应用会导致眼睛疲劳。",
      p-1-back: "将暗色模式集成到应用程序中需要一些准备工作。记住深色也必须符合 WCAG 颜色对比度标准，这一点至关重要。",
      p-2-back: "最好是，应用会根据用户的设备设置默认启用哪种显示模式。尽管如此，应用应该允许用户在显示模式之间切换。",
    },
}
</i18n>
