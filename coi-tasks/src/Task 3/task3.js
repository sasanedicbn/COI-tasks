class SimpleSwiper extends HTMLElement {
  constructor() {
    super();
    this.swiper = null;
    this.section = document.createElement("section");
    this.section.className = "swiper-section";

    this.section.innerHTML = `
      <div class="swiper-container swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    `;

    this.appendChild(this.section);
  }

  connectedCallback() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper(".swiper", {
      loop: true,
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
