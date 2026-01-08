/* =========================
   MAIN.JS
   Lightweight UX helpers
   ========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------
     Smooth scroll for anchors
  -------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* -------------------------
     CTA click tracking (console)
     Ready for GA / Plausible
  -------------------------- */
  const ctaButtons = document.querySelectorAll(".cta-button");

  ctaButtons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("CTA clicked:", this.textContent.trim());
      // Hook ready for analytics
      // gtag('event', 'cta_click', { label: this.textContent });
    });
  });

  /* -------------------------
     External links → new tab
  -------------------------- */
  const externalLinks = document.querySelectorAll("a[href^='http']");

  externalLinks.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "nofollow noopener sponsored");
    }
  });

  /* -------------------------
     Lazy reveal sections
  -------------------------- */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
