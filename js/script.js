document.addEventListener("DOMContentLoaded", function () {
  const systemContainer = document.querySelector(".system-container");
  const systemSection = document.querySelector("#System");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener("scroll", onScroll);
        onScroll();
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(systemSection);

  function onScroll() {
    const sectionTop = systemSection.offsetTop;
    const sectionHeight = systemSection.offsetHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const buffer = windowHeight / 10;
    const scrollProgress = Math.min(
      Math.max(
        (scrollTop + windowHeight - sectionTop + buffer) /
          (sectionHeight + windowHeight),
        0
      ),
      1
    );

    systemContainer.style.setProperty(
      "--scroll-percentage",
      `${scrollProgress * 100}%`
    );
  }

  document.querySelectorAll('a[href^="System"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
