// Task 1 -> Image + Text
// 1. Create simple Image + Text section
// 2. Font family does not matter
// 3. Section needs to be responsive
// 4. Section needs to be pixel perfect compared to Figma (375 and 1440 resolutions)
// 5. We do not use any framework.
// 6. Use bem when naming classes -> LINK
// 7. Simple JS toggle function should be created with nice animation for text when it
// opens/closes.
// 8. Add 200vh margin to the top and bottom of element so you have empty space, in custom
// element create intersection observer which will reveal our section when user scrolls to it,
// then it hide it when we scroll past the section. Going back will again reveal it.
// 9. Bonus: Wrap section with custom element, define it in JS and write toggle function inside
// its constructor
// import } from '../public/model-img.png'

class ImageTextSection extends HTMLElement {
  constructor() {
    super();
    const section = document.createElement("section");
    section.className = "image-text";

    const img = document.createElement("img");
    img.className = "image-text__image";
    img.src = "./public/model-img.png";
    img.alt = "Model women image";

    const title = document.createElement("h4");
    title.className = "image-text__title";
    title.textContent = "Handcrafted and Responsibly Sourced";

    section.appendChild(title);
    section.appendChild(img);

    this.appendChild(section);
  }
}

customElements.define("image-text-section", ImageTextSection);
