class Utilla {
  constructor(elem) {
    this._elem = document.querySelector(elem);
  }

  hide() {
    if(this._elem) {
      this._elem.style.display = 'none';
    }

    return this;
  }

  show(displayType = '') {
    if(this._elem) {
      this._elem.style.display = displayType;
    }

    return this;
  }
}

let u = (selector) => new Utilla(selector);

export default u;
