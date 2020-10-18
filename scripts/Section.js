// import { cards as cardSelector } from "../src/index.js";

class Section {
  constructor({ items, renderer }, cardSelector) {
    this._addItem = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardSelector);
  }
  renderer() {
    this.renderer.forEach(item => {
      this._renderer(item);
    })
  }

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;

