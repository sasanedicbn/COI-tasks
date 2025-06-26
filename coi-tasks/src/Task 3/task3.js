class SimpleSwiper extends HTMLElement {
  constructor() {
    super();
    this.swiper = null;
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
    `;

    this.appendChild(this.section);
  }

  connectedCallback() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: () => {
          console.log(`Active slide index: ${this.swiper.realIndex}`);
        },
      },
    });
  }
}

customElements.define("simple-swiper", SimpleSwiper);
