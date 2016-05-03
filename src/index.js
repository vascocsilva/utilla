class Utilla {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  each(callback) {
    for (let i = 0; i < this.elements.length; i++) {
      callback.call(this.elements[i]);
    }

    return this;
  }

  hide() {
    this.each(function() {
      this.style.display = 'none';
    });

    return this;
  }

  show(displayType = '') {
    this.each(function() {
      this.style.display = displayType;
    });

    return this;
  }

  on(event, callback) {
    return this.each(function() {
      this.addEventListener(event, callback, false)
    })
  }
}

let u = (selector) => new Utilla(selector);

export default u;
