<script setup lang="ts">
defineProps<{
  /** Value of the [id] for the \<label\> */
  id: string;

  /** Value of the text for the \<label\> */
  label: string;

  /** Key and values used for the \<option\>s */
  options: Map<string, string>;
}>();
</script>

<template>
  <span class="flex flex-col gap-2">
    <span>
      <label :id="id">{{ label }}</label>
    </span>

    <select
      v-model="$i18n.locale"
      class="border-solid border-[1px] border-zinc-900 dark:border-white dark:bg-zinc-600"
      :aria-label="id"
    >
      <option
        v-for="[value, label] in options.entries()"
        :value="value"
        class="dark:hover:bg-zinc-500"
      >
        {{ label }}
      </option>
    </select>
  </span>
</template>
