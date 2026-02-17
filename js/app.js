/* ============================
   FIX HOME / ANCHOR SCROLL
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const headerOffset = document.querySelector(".header")?.offsetHeight || 0;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     MOBILE NAV TOGGLE
  ============================ */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav")) {
        navLinks.classList.remove("active");
      }
    });
  }

    /* ============================
      SERVICES ACCORDION
    ============================ */
    const services = document.querySelectorAll(".service-acc");

    services.forEach(service => {
      const btn = service.querySelector(".service-btn");
      if (!btn) return;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const isOpen = service.classList.contains("active");

        services.forEach(s => s.classList.remove("active"));

        if (!isOpen) {
          service.classList.add("active");
        }
      });
    });

  /* ============================
     GALLERY LIGHTBOX
  ============================ */
  window.openLightbox = function (src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    if (!lightbox || !img) return;

    img.src = src;
    lightbox.style.display = "flex";
  };

  window.closeLightbox = function () {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    lightbox.style.display = "none";
  };

  /* ============================
     REVEAL ON SCROLL
  ============================ */
  const revealItems = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealItems.forEach(item => {
      const rect = item.getBoundingClientRect();

      if (rect.top < windowHeight - 100) {
        item.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load

});


/* ============================
   FORCE SERVICE IMAGE SHAPE
============================ */
document.querySelectorAll(".service-img").forEach(img => {
  img.style.width = "100%";
  img.style.height = "220px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "14px";
  img.style.display = "block";
});

