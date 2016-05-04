/*
   __   __  _______  ___   ___      ___      _______
  |  | |  ||       ||   | |   |    |   |    |   _   |
  |  | |  ||_     _||   | |   |    |   |    |  |_|  |
  |  |_|  |  |   |  |   | |   |    |   |    |       |
  |       |  |   |  |   | |   |___ |   |___ |       |
  |       |  |   |  |   | |       ||       ||   _   |
  |_______|  |___|  |___| |_______||_______||__| |__|

  A lightweight, vanilla js, dom manipulation library
  Authors: Pedro Brás (https://github.com/pedromrb) & Vasco Silva (https://github.com/vascocsilva)

  Version: 1.0.0
*/

class Utilla {
  // Prefix to use in functions handled by 'off' and 'on' methods
  // to have a reference for the function associated to an event type
  // so the event listener can be removed
  // eg: uumouseenter, uumouseleave, uuclick
  static prefix() { return 'uu'; }

  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
  }

  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(this.elements[i]);
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

  // Add a class to current selected elements
  // @param className (string)
  addClass(className) {
    this.each(function() {
      if (this.classLlist)
        this.classList.add(className);
      else {
        this.className += ' ' + className;
      }
    });

    return this;
  }

  // Remove a class in current selected elements
  // @param className (string)
  removeClass(className) {
    this.each(function() {
      if (this.classList)
        this.classList.remove(className);
      else
        this.className = this.className.replace(
          new RegExp('(^|\\b)'
          + className.split(' ').join('|')
          + '(\\b|$)', 'gi'), ' '
        );
    });

    return this;
  }

  on(event, fn) {
    return this.each(function() {
      this[Utilla.prefix() + event] = fn;
      this.addEventListener(event, fn, false);
    })
  }

  // Remove eventListener from current elements
  // @param event type
  off(event) {
    return this.each(function() {
      this.removeEventListener(event, this[Utilla.prefix() + event]);
    })
  }

  // serialize Array
  serializeArray() {
    
  }
}

let u = (selector) => new Utilla(selector);

export default u;
