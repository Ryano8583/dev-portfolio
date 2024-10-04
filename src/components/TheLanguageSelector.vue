<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BaseSelect from "./BaseSelect.vue";

const { fallbackLocale } = useI18n();
const { t } = useI18n({
  useScope: "local",
});

const options = new Map() as Map<string, string>;
options.set("en", "English");
options.set("es", "Español");
options.set("fr", "Français");
options.set("hi", "हिंदी");
options.set("zh", "中文");

function updateLocalStorageItemForLocale(e: Event) {
  const target = e.target as HTMLSelectElement;
  const value = target.value;

  if (value === fallbackLocale.value) {
    localStorage.removeItem("locale");
    return;
  }
  localStorage.setItem("locale", value);
}
</script>

<template>
  <BaseSelect
    id="languageSelector"
    :label="t('')"
    :options="options"
    @change="updateLocalStorageItemForLocale"
  />
</template>

<i18n lang="yaml">
{
  en: "Language selector",
  es: "Selector de idioma",
  fr: "Sélecteur de langue",
  hi: "भाषा चयनकर्ता",
  zh: "语言选择器",
}
</i18n>
