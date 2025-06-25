class RecipesSection extends HTMLElement {
  constructor() {
    super();

    const section = document.createElement("section");
    section.className = "recipes-section";

    const header = document.createElement("div");
    header.className = "recipes-section__header";

    const title = document.createElement("h2");
    title.className = "recipes-section__title";
    title.textContent = "Our Recipes";

    const subtitle = document.createElement("p");
    subtitle.className = "recipes-section__subtitle";
    subtitle.textContent =
      "Great on its own or as a mixer. Fun cocktail & mocktail recipes to try.";

    const button = document.createElement("button");
    button.className = "recipes-section__button";
    button.textContent = "View all recipes";
    // -------------------------------------------------------------
    const cartWrapper = document.createElement("div");
    cartWrapper.className = "recipes-section__cart-wrapper";

    header.append(title, subtitle, button);

    const createSingleCart = ({ imgSrc, imgAlt, titleText, detailImg }) => {
      const singleCart = document.createElement("div");
      singleCart.className = "recipes-section__single-cart";
      singleCart.style.position = "relative";

      const img = document.createElement("img");
      img.className = "recipes-section__img";
      img.src = imgSrc;
      img.alt = imgAlt;

      const imgTitle = document.createElement("span");
      imgTitle.className = "recipes-section__cart-wrapper-title";
      imgTitle.textContent = titleText;

      singleCart.appendChild(img);

      if (detailImg && Array.isArray(detailImg)) {
        detailImg.forEach((detail) => {
          const wrapper = document.createElement("div");
          wrapper.className = `recipes-section__img-wrapper ${detail.class}`;

          const detailEl = document.createElement("img");
          detailEl.className = "recipes-section__detail";
          detailEl.src = detail.src;
          detailEl.alt = "";

          wrapper.appendChild(detailEl);
          singleCart.appendChild(wrapper);
        });
      }

      singleCart.appendChild(imgTitle);
      return singleCart;
    };

    const cardsData = [
      {
        imgSrc: "../../public/coctail-first.jpg",
        imgAlt: "Coctail photo 1",
        titleText: "Sparkling Triple Citrus & Mint Mocktail",
        detailImg: [
          { src: "../../public/first-coctail-detail.png", class: "top-left" },
        ],
      },
      {
        imgSrc: "../../public/coctail-second.png",
        imgAlt: "Coctail photo 2",
        titleText: "Classic Mojito Cocktail",
        detailImg: [
          {
            src: "../../public/second-coctail-detail-top.png",
            class: "top-right",
          },
          {
            src: "../../public/second-coctail-details-bottom.png",
            class: "bottom-left",
          },
        ],
      },
      {
        imgSrc: "../../public/coctail-threed.png",
        imgAlt: "Coctail photo 3",
        titleText: "Tropical Pineapple Punch",
        detailImg: [
          {
            src: "../../public/threed-coctail-bottom-right-detail.png",
            class: "bottom-right",
          },
        ],
      },
    ];

    cardsData.forEach((card) => {
      const singleCart = createSingleCart(card);
      cartWrapper.appendChild(singleCart);
    });

    section.append(header, cartWrapper);
    this.appendChild(section);
  }
}

customElements.define("recipes-section", RecipesSection);
