document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 5000; // 5 seconds
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);

      counter.innerText = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  });
});


/* LIGHTBOX */
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (target) {
    setTimeout(() => {
      target.classList.add("active");
    }, 50);
  }
}
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     SECTION REVEAL (SCROLL + CLICK)
  ================================ */

  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));

  /* ===============================
     NAV CLICK TRIGGER
  ================================ */

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.classList.remove("active");

        setTimeout(() => {
          targetSection.classList.add("active");
        }, 150);
      }
    });
  });

  /* ===============================
     COUNTER (KEEP YOUR EXISTING CODE)
  ================================ */

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 5000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      counter.innerText = value.toLocaleString();

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });

});

/* LIGHTBOX (UNCHANGED) */
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
