///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Selectors
const header = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const copyright = document.querySelector(".copyright");
const heroSection = document.querySelector(".section-hero");
///////////////////////////////////////////////////////////
// Mobile Nav
btnMobileNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);

// Dates
const now = new Date();
copyright.textContent = `
Copyright © ${now.getFullYear()} by Omnifood, Inc. All rights reserved.
`;

// sticky navigation
const obs = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === false)
      document.body.classList.add("sticky");
    if (entries[0].isIntersecting === true)
      document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
