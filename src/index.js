export default class Utilla {
  u(elem) {
    if (window === this) {
      return new u(elem);
    }

    this._elem = document.querySelector(elem);

    return this._elem;
  }

  hide() {
    if(this._elem) {
      this._elem.style.display = 'none';
    }
  }
}
