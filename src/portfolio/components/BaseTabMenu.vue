<script setup lang="ts">
import { setId } from "../composables/setId";

const props = defineProps<{
  /** Number of tabs within the container */
  tabCount: string;
  /** Puts the tabs vertical rather than horizontal on larger screens */
  useVertical?: boolean;
}>();
let first: string, second: string, third: string, fourth: string;

function selection(event: Event) {
  const nextTab = event.target as HTMLButtonElement;
  const container = nextTab.closest("[data-tab-selected]") as HTMLDivElement;
  const tabs = container.querySelectorAll('button[role="tab"]');

  for (const tab of tabs) {
    if (tab.getAttribute("aria-selected") === "false") {
      continue;
    }
    if (tab === nextTab) {
      return;
    }
    unselectCurrent(tab);
    break;
  }
  const tablist = nextTab.closest('[role="tablist"]') as HTMLDivElement;
  const index = Array.prototype.indexOf.call(tablist.children, nextTab);

  container.dataset.tabSelected = index.toString();
  selectNew(nextTab);
}

function keyDownHandler(event: Event & KeyboardEvent) {
  const keyHit = event.code;
  const direction = new Map();

  direction.set(
    "up",
    keyHit === "ArrowUp" || keyHit === "KeyW" || keyHit === "Numpad8",
  );
  direction.set(
    "down",
    keyHit === "ArrowDown" || keyHit === "KeyS" || keyHit === "Numpad5",
  );
  direction.set(
    "left",
    keyHit === "ArrowLeft" || keyHit === "KeyA" || keyHit === "Numpad4",
  );
  direction.set(
    "right",
    keyHit === "ArrowRight" || keyHit === "KeyD" || keyHit === "Numpad6",
  );
  direction.set("home", keyHit === "Home");
  direction.set("end", keyHit === "End");

  let isADirection = false;

  for (const value of direction.values()) {
    if (value) {
      isADirection = true;
      break;
    }
  }
  if (!isADirection) {
    return;
  }
  event.preventDefault();

  const currentTab = event.target as HTMLButtonElement;
  const container = currentTab.closest("[data-tab-selected]") as HTMLDivElement;
  const tabSelected = container.dataset.tabSelected as string;
  let index = parseInt(tabSelected) as number;

  unselectCurrent(currentTab);
  for (const [key, value] of direction) {
    if (!value) {
      continue;
    }
    switch (key) {
      case "up":
      case "left":
        index = updateForPreviousTab(index);
        break;
      case "down":
      case "right":
        index = updateForNextTab(index);
        break;
      case "home":
        index = 0;
        break;
      case "end":
        index = parseInt(props.tabCount) - 1;
    }
  }
  const tabs = container.querySelectorAll('button[role="tab"]');
  const nextTab = tabs[index] as HTMLButtonElement;

  container.dataset.tabSelected = index.toString();
  selectNew(nextTab);
  nextTab.focus();
}

function unselectCurrent(currentTab: Element) {
  const idValue = currentTab.getAttribute("aria-controls") as string;
  const tabPanel = document.getElementById(idValue) as HTMLDivElement;

  currentTab.setAttribute("tabindex", "-1");
  currentTab.setAttribute("aria-selected", "false");
  tabPanel.setAttribute("hidden", "");
  tabPanel.classList.remove("current-selection");
}

function selectNew(nextTab: HTMLButtonElement) {
  const idValue = nextTab.getAttribute("aria-controls") as string;
  const tabPanel = document.getElementById(idValue) as HTMLDivElement;

  nextTab.removeAttribute("tabindex");
  nextTab.setAttribute("aria-selected", "true");
  tabPanel.removeAttribute("hidden");
  tabPanel.classList.add("current-selection");
}

function updateForPreviousTab(index: number) {
  index--;
  if (index < 0) {
    index = parseInt(props.tabCount) - 1;
  }
  return index;
}

function updateForNextTab(index: number) {
  index++;
  if (index > parseInt(props.tabCount) - 1) {
    index = 0;
  }
  return index;
}
</script>

<template>
  <div data-tab-selected="0" :class="{ 'sm:grid': props.useVertical }">
    <div
      role="tablist"
      class="flex flex-col"
      :class="{ 'sm:flex-row': !props.useVertical }"
    >
      <button
        class="w-full py-4 px-5 border-solid border-[1.5px] border-b-0 rounded-t-md sm:rounded-tr-none border-zinc-900 dark:border-white bg-gray-100 hover:bg-gray-200 focus-visible:z-10 focus-visible:outline-offset-2 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-center text-base font-bold text-zinc-900 dark:text-zinc-50"
        :class="{ 'flex-grow sm:border-r-0': props.useVertical }"
        role="tab"
        :aria-controls="`${(first = setId('panel'))}`"
        aria-selected="true"
        @click="selection"
        @keydown="keyDownHandler"
      >
        <slot name="headingOne" />
      </button>
      <button
        class="w-full py-4 px-5 border-solid border-[1.5px] border-b-0 border-zinc-900 dark:border-white bg-gray-100 hover:bg-gray-200 focus-visible:z-10 focus-visible:outline-offset-2 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-center text-base font-bold text-zinc-900 dark:text-zinc-50"
        :class="{
          'flex-grow sm:border-r-0 last:border-b-[1.5px] sm:last:rounded-bl-md':
            props.useVertical,
          'sm:border-l-0 sm:last:rounded-tr-md': !props.useVertical,
        }"
        role="tab"
        tabindex="-1"
        :aria-controls="`${(second = setId('panel'))}`"
        aria-selected="false"
        @click="selection"
        @keydown="keyDownHandler"
      >
        <slot name="headingTwo" />
      </button>
      <button
        v-if="parseInt(props.tabCount) >= 3"
        class="w-full py-4 px-5 border-solid border-[1.5px] border-b-0 border-zinc-900 dark:border-white bg-gray-100 hover:bg-gray-200 focus-visible:z-10 focus-visible:outline-offset-2 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-center text-base font-bold text-zinc-900 dark:text-zinc-50"
        :class="{
          'flex-grow sm:border-r-0 sm:last:border-b-[1.5px] sm:last:rounded-bl-md':
            props.useVertical,
          'sm:border-l-0 sm:last:rounded-tr-md': !props.useVertical,
        }"
        role="tab"
        tabindex="-1"
        :aria-controls="`${(third = setId('panel'))}`"
        aria-selected="false"
        @click="selection"
        @keydown="keyDownHandler"
      >
        <slot name="headingThree" />
      </button>
      <button
        v-if="parseInt(props.tabCount) === 4"
        class="w-full py-4 px-5 border-solid border-[1.5px] border-b-0 border-zinc-900 dark:border-white bg-gray-100 hover:bg-gray-200 focus-visible:z-10 focus-visible:outline-offset-2 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-center text-base font-bold text-zinc-900 dark:text-zinc-50"
        :class="{
          'flex-grow sm:border-r-0 last:border-b-[1.5px] sm:last:rounded-bl-md':
            props.useVertical,
          'sm:border-l-0 sm:last:rounded-tr-md': !props.useVertical,
        }"
        role="tab"
        tabindex="-1"
        :aria-controls="`${(fourth = setId('panel'))}`"
        aria-selected="false"
        @click="selection"
        @keydown="keyDownHandler"
      >
        <slot name="headingFour" />
      </button>
    </div>

    <div
      :id="`${first}`"
      role="tabpanel"
      class="relative opacity-0 invisible border-solid border-[1.5px] border-zinc-900 dark:border-white dark:bg-gray-600 p-4 focus-visible:z-10 focus-visible:outline-offset-2 current-selection"
      :class="{ 'sm:border-t-[1px]': props.useVertical }"
      tabindex="0"
    >
      <slot name="panelOne" />
    </div>
    <div
      :id="`${second}`"
      role="tabpanel"
      class="relative opacity-0 invisible border-solid border-[1.5px] border-zinc-900 dark:border-white dark:bg-gray-600 p-4 focus-visible:z-10 focus-visible:outline-offset-2"
      :class="{ 'sm:border-t-[1px]': props.useVertical }"
      tabindex="0"
      hidden
    >
      <slot name="panelTwo" />
    </div>
    <div
      v-if="parseInt(props.tabCount) >= 3"
      :id="`${third}`"
      class="relative opacity-0 invisible border-solid border-[1.5px] border-zinc-900 dark:border-white dark:bg-gray-600 p-4 focus-visible:z-10 focus-visible:outline-offset-2"
      :class="{ 'sm:border-t-[1px]': props.useVertical }"
      tabindex="0"
      hidden
    >
      <slot name="panelThree" />
    </div>
    <div
      v-if="parseInt(props.tabCount) === 4"
      :id="`${fourth}`"
      class="relative opacity-0 invisible border-solid border-[1.5px] border-zinc-900 dark:border-white dark:bg-gray-600 p-4 focus-visible:z-10 focus-visible:outline-offset-2"
      :class="{ 'sm:border-t-[1px]': props.useVertical }"
      tabindex="0"
      hidden
    >
      <slot name="panelFour" />
    </div>
  </div>
</template>

<style lang="scss">
button[aria-selected="true"]:not([tabindex="-1"]) {
  background-color: #bfdbfe;
  color: #18181b;

  &:hover {
    background-color: #dbeafe;
  }
}

.current-selection {
  opacity: 1 !important;
  visibility: visible !important;
}

@media (min-width: 640px) {
  .sm\:grid {
    grid-template-columns: 0.5fr 1fr;
  }
}
</style>
