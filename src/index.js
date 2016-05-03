export default class Utilla {
  u(elem) {
    if (window === this) {
      return new u(elem);
    }

    this._elem = document.querySelector(elem);

    return this._elem;
  }
}
