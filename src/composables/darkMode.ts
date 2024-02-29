import { customRef } from "vue";

export type DarkModeOptions = {
  from: "media" | "class";
};

const classList = document.documentElement.classList;
const prefersDark = matchMedia("(prefers-color-scheme: dark)");

let settings: DarkModeOptions | null;
let darkModeTrigger: () => void;

export const isDarkMode = customRef<boolean>((track, trigger) => {
  darkModeTrigger = trigger;
  return {
    get() {
      track();
      switch (settings?.from) {
        case "class":
          return classList.contains("dark");
        case "media":
          return prefersDark.matches;
        default:
          return false;
      }
    },
    set(value) {
      switch (settings?.from) {
        case "class":
          if (value) {
            classList.add("dark");
            return;
          }
          classList.remove("dark");
          return;
        case "media":
          throw "Must set prefers-color-scheme in the OS or override with the browser dev tools";
        default:
          throw "Dark Mode has not been setup";
      }
    },
  };
});

export function useDarkMode(options: DarkModeOptions) {
  if (settings) {
    return;
  }
  switch (options.from) {
    case "class":
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === "class") {
            localStorage.theme = classList.contains("dark") ? "dark" : "light";
            darkModeTrigger();
          }
        }
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      addEventListener("storage", (event) => {
        if (event.key === "theme") {
          isDarkMode.value = event.newValue === "dark";
        }
      });

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && prefersDark.matches)
      ) {
        document.documentElement.classList.add("dark");
      }
      break;
    case "media":
      prefersDark.onchange = darkModeTrigger;
  }
  settings = options;
}
