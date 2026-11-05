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

      const original = button.dataset.originalLabel || button.innerText;
      button.dataset.originalLabel = original;

      try {
        const text = target.innerText;
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

  const tabLists = document.querySelectorAll('[role="tablist"]');
  tabLists.forEach((tabList) => {
    const tabs = Array.from(tabList.querySelectorAll('[data-timeline-tab]'));

    const activate = (tab) => {
      const targetId = tab.getAttribute("aria-controls");
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.setAttribute("tabindex", selected ? "0" : "-1");
      });
      document.querySelectorAll("[data-timeline-panel]").forEach((panel) => {
        const active = panel.id === targetId;
        panel.classList.toggle("active", active);
        panel.hidden = !active;
      });
    };

    tabs.forEach((tab, index) => {
      tab.setAttribute("tabindex", tab.getAttribute("aria-selected") === "true" ? "0" : "-1");
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        tabs[next].focus();
        activate(tabs[next]);
      });
    });

    const initial = tabs.find((tab) => tab.getAttribute("aria-selected") === "true");
    if (initial) activate(initial);
  });

  const navLinks = Array.from(document.querySelectorAll(".primary-nav a[href^='#']"));
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