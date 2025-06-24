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

    header.append(title, subtitle, button);
    section.appendChild(header);
    this.appendChild(section);
  }
}

customElements.define("recipes-section", RecipesSection);
