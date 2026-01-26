/*
-------------------------------------------------------------------------
* Template Name    : Nichol - Tailwind CSS Personal Portfolio Templates   * 
* Author           : SRBThemes                                           *
* Version          : 1.0.0                                               *
* Created          : June 2023                                           *
* File Description : Main Js file of the template                        *
*-------------------------------------------------------------------------
*/

// Sticky Navbar + Active Section
var navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".mobile-nav ul li");

window.onscroll = function () {
  if (navbar) {
    if (window.pageYOffset > 80) {
      navbar.classList.add("stickyadd");
    } else {
      navbar.classList.remove("stickyadd");
    }
  }

  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (current && li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

// Mobile Menu Toggle
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// Swiper (only if present)
if (typeof Swiper !== "undefined" && document.querySelector(".client-review-slider")) {
  new Swiper(".client-review-slider", {
    autoplay: true,
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 3000 },
    navigation: {
      nextEl: ".client-review .swiper-btn-next",
      prevEl: ".client-review .swiper-btn-prev",
    },
    breakpoints: {
      991: { slidesPerView: 2, spaceBetween: 28 },
    },
  });
}

// AOS Animation (only if loaded)
if (typeof AOS !== "undefined") {
  AOS.init();
}

/* ================================
   Video Lightbox (Vimeo)
================================ */
/* ================================
   Lightbox (Vimeo + Images)
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const overlay = document.getElementById("videoOverlay");
    const closeBtn = document.getElementById("videoClose");
    const frameHost = document.getElementById("videoFrame");
  
    // If modal isn't on this page, do nothing
    if (!modal || !overlay || !closeBtn || !frameHost) return;
  
    const showModal = () => {
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("overflow-hidden");
    };
  
    const closeModal = () => {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
      frameHost.innerHTML = ""; // stops video / clears image
      document.body.classList.remove("overflow-hidden");
    };
  
    const openVimeo = (id, hash) => {
      const src =
        `https://player.vimeo.com/video/${id}` +
        (hash ? `?h=${encodeURIComponent(hash)}` : "?") +
        `${hash ? "&" : ""}autoplay=1&badge=0&autopause=1&playsinline=1&title=0&byline=0&portrait=0`;
  
      frameHost.innerHTML = `
        <div class="relative w-full aspect-video bg-black">
          <iframe
            src="${src}"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Vimeo video player"
            allowfullscreen
          ></iframe>
        </div>
      `;
  
      showModal();
    };
  
    const openImage = (src) => {
      frameHost.innerHTML = `
        <div class="w-full flex items-center justify-center bg-black">
          <img
            src="${src}"
            alt="Project image"
            class="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
      `;
  
      showModal();
    };
  
    // Delegated click handler
    document.addEventListener("click", (e) => {
      const videoTrigger = e.target.closest("[data-vimeo-id]");
      if (videoTrigger) {
        e.preventDefault();
        openVimeo(
          videoTrigger.getAttribute("data-vimeo-id"),
          videoTrigger.getAttribute("data-vimeo-hash")
        );
        return;
      }
  
      const imageTrigger = e.target.closest("[data-image-src]");
      if (imageTrigger) {
        e.preventDefault();
        openImage(imageTrigger.getAttribute("data-image-src"));
        return;
      }
    });
  
    // Close actions
    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });
  