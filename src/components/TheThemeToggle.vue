<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { useDarkMode, isDarkMode } from "../composables/darkMode";
import { FontAwesomeIcon } from "../composables/faLibrary";

import BaseToggle from "./BaseToggle.vue";

const { t } = useI18n({
  useScope: "local",
});

useDarkMode({ from: "class" });
</script>

<template>
  <BaseToggle id="dark-mode" v-model="isDarkMode">
    {{ t("") }}
    <template #icon>
      <FontAwesomeIcon :icon="['far', isDarkMode ? 'moon' : 'sun']" />
    </template>
  </BaseToggle>
</template>

<i18n lang="yaml">
{
  en: "Dark mode",
  es: "Modo oscuro",
  fr: "Mode sombre",
  hi: "डार्क मोड",
  zh: "暗黑模式",
}
</i18n>
