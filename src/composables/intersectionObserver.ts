const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0, 0.15, 0.25, 0.33, 0.66, 1],
};

function observed(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    const target = entry.target as Element;
    const topBounding = target.getBoundingClientRect().top;
    const bottomBounding = target.getBoundingClientRect().bottom;

    headingsHandler(entry, target, topBounding, bottomBounding);
    divHandler(entry, target, topBounding, bottomBounding);
  }
}

function headingsHandler(
  entry: IntersectionObserverEntry,
  target: Element,
  topBounding: number,
  bottomBounding: number,
) {
  if (topBounding <= 0 && bottomBounding <= 180) {
    const heading = target.querySelector("h2") as HTMLHeadingElement;
    heading.classList.remove("fade-in-b");
    heading.classList.add("fade-out-t");
    return;
  }
  if (entry.intersectionRatio >= 0.25) {
    const heading = target.querySelector("h2") as HTMLHeadingElement;
    heading.classList.remove("fade-out-t");
    heading.classList.add("fade-in-b");
    return;
  }
  if (topBounding >= 650 && bottomBounding >= 800) {
    target.querySelector("h2")?.classList.remove("fade-in-b");
  }
}

function divHandler(
  entry: IntersectionObserverEntry,
  target: Element,
  topBounding: number,
  bottomBounding: number,
) {
  if (topBounding <= -75 && bottomBounding <= 100) {
    const content = target.querySelector(
      "div[data-transitional-content]",
    ) as HTMLDListElement;
    content.classList.remove("fade-in-b");
    content.classList.add("fade-out-t");
    return;
  }
  if (topBounding <= 600 || entry.intersectionRatio >= 0.5) {
    const content = target.querySelector(
      "div[data-transitional-content]",
    ) as HTMLDListElement;
    content.classList.remove("fade-out-t");
    content.classList.add("fade-in-b");
    return;
  }
  if (topBounding >= 650 && bottomBounding >= 800) {
    target
      .querySelector("div[data-transitional-content]")
      ?.classList.remove("fade-in-b");
  }
}

export const observerHeadings = new IntersectionObserver(observed, options);
