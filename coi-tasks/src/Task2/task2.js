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

    const singleCart = document.createElement("div");
    singleCart.className = "recipes-section__single-cart";

    const img = document.createElement("img");
    img.className = "recipes-section__img";
    img.src = "./coctail-first.jpg";

    img.alt = "Coctail photo";

    const imgTitle = document.createElement("span");
    imgTitle.className = "recipes-section__cartWrapper-title";
    imgTitle.textContent = "Sparkling Triple Citrus & Mint Mocktail";

    cartWrapper.append(singleCart);
    singleCart.append(img, imgTitle);
    header.append(title, subtitle, button);

    section.append(header, cartWrapper);
    this.appendChild(section);
  }
}

customElements.define("recipes-section", RecipesSection);
