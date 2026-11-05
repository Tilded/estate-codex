(() => {
  "use strict";

  const rail = document.getElementById("rail");
  const toggle = document.getElementById("menu-toggle");

  if (rail && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = rail.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    rail.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        rail.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        rail.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) return;

      const text = target.innerText;
      const original = button.dataset.originalLabel || button.innerText;
      button.dataset.originalLabel = original;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const helper = document.createElement("textarea");
          helper.value = text;
          helper.setAttribute("readonly", "");
          helper.style.position = "absolute";
          helper.style.left = "-9999px";
          document.body.appendChild(helper);
          helper.select();
          const copied = document.execCommand("copy");
          helper.remove();
          if (!copied) throw new Error("Clipboard copy was not available.");
        }

        button.innerText = "COPIED";
        window.setTimeout(() => { button.innerText = original; }, 1500);
      } catch (error) {
        button.innerText = "SELECT TEXT TO COPY";
        window.setTimeout(() => { button.innerText = original; }, 2200);
      }
    });
  });

  const navLinks = Array.from(document.querySelectorAll(".primary-nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }
})();