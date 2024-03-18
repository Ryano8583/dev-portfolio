let hideTimeout = null as number | null;
let showTimeout = null as number | null;
let previousPosition = window.scrollY as number;

function scrollController() {
  const topBar = document.getElementById("top-bar") as HTMLDivElement;
  const currentPosition = window.scrollY as number;
  if (previousPosition > currentPosition) {
    showHandler(topBar);
  } else {
    hideHandler(topBar);
  }
  previousPosition = currentPosition;
}

function hideHandler(topBar: HTMLDivElement) {
  if (showTimeout !== null) {
    clearTimeout(showTimeout);
    showTimeout = null;
  }
  if (hideTimeout !== null || topBar.classList.contains("fade-out-t")) {
    return;
  }
  hideTimeout = setTimeout(() => {
    hideTopBar(topBar);
  }, 1000);
}

function showHandler(topBar: HTMLDivElement) {
  if (hideTimeout !== null) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  if (showTimeout !== null || topBar.classList.contains("fade-in-b")) {
    return;
  }
  showTimeout = setTimeout(() => {
    showTopBar(topBar);
  }, 1000);
}

function hideTopBar(topBar: HTMLDivElement) {
  topBar.classList.remove("fade-in-b");
  topBar.classList.add("fade-out-t");
  hideTimeout = null;
}

export function showTopBar(topBar: HTMLDivElement) {
  topBar.classList.remove("fade-out-t");
  topBar.classList.add("fade-in-b");
  showTimeout = null;
}

export function scrollListener() {
  window.addEventListener("scroll", scrollController);
}
