(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#headerMenu");
  const isSelectedHeroPage = document.body.classList.contains("hero-page--selected");
  const hero = document.querySelector(".hero");
  const heroImage = document.querySelector(".hero__image");

  if (!toggle || !menu) {
    return;
  }

  const setMenuState = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  };

  const updateHeaderOnScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const updateHeroParallax = () => {
    if (!isSelectedHeroPage || !hero || !heroImage || window.matchMedia("(max-width: 759px)").matches) {
      heroImage?.style.removeProperty("--hero-parallax-y");
      return;
    }

    const heroRect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-heroRect.top / heroRect.height, 0), 1);
    const offset = Math.round(progress * 56);
    heroImage.style.setProperty("--hero-parallax-y", `${offset}px`);
  };

  updateHeaderOnScroll();
  updateHeroParallax();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  window.addEventListener("scroll", updateHeroParallax, { passive: true });
  window.addEventListener("resize", updateHeroParallax);

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuState(!menu.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("click", (event) => {
    const isOpen = menu.classList.contains("is-open");
    const clickedInsideHeader = event.target.closest(".site-header");
    const clickedInsideMenu = event.target.closest("#headerMenu");

    if (isOpen && !clickedInsideHeader && !clickedInsideMenu) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
})();
