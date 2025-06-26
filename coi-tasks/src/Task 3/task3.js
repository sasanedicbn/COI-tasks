class SimpleSwiper extends HTMLElement {
  constructor() {
    super();
    this.swiper = null;
    this.isSwiperActive = false;
    this.section = document.createElement("section");
    this.section.className = "swiper-section";

    this.section.innerHTML = `
      <div class="swiper-container swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../public/first-slide.png" alt="photo of men"/></div>
          <div class="swiper-slide"><img src="../../public/second-slide.png" alt="photo of women"/></div>
          <div class="swiper-slide"><img src="../../public/threed-slide.png" alt="photo of men"/></div>
          <div class="swiper-slide"><img src="../../public/second-slide.png" alt="photo of women"/></div>
        </div>
        <div class="swiper-button-prev"><img src="../../public/arrow-left.svg" alt="icon-arrow"/></div>
        <div class="swiper-button-next"><img src="../../public/arrow-right.svg" alt="icon-arrow"/></div>
      </div>
      <button id="toggle-swiper">Toggle Swiper</button>
    `;

    this.appendChild(this.section);
  }

  connectedCallback() {
    this.initSwiper();
    this.section
      .querySelector("#toggle-swiper")
      .addEventListener("click", () => this.toggleSwiper());
  }

  initSwiper() {
    this.swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1401: {
          slidesPerView: 3,
        },
      },
      on: {
        slideChange: () => {
          console.log(`Active: ${this.swiper.realIndex}`);
        },
      },
    });
    this.isSwiperActive = true;
  }

  destroySwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
      this.isSwiperActive = false;
    }
  }

  toggleSwiper() {
    if (this.isSwiperActive) {
      this.destroySwiper();
      console.log("Swiper is destroyed.");
    } else {
      this.initSwiper();
      console.log("Swiper is initialized.");
    }
  }
}

customElements.define("simple-swiper", SimpleSwiper);
