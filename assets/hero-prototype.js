(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#headerMenu");

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

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

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

