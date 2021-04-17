/**
 * Header Dropdown
 */

function Dropdown (option) {
  this._init_show = (option && option.show) || false;
  this.lastActiveIndex = null;
  this._debug = (option && option.debug) || false;
  this._init()
}

Dropdown.prototype = {
  _init: function () {
    this._header = document.querySelector('header');
    this._dropdown = document.querySelector('header .dropdown');
    this._multiMenuItems = document.querySelectorAll('header ul li.multi');
    this._multiContent = document.querySelectorAll('header .dropdown .multi');

    // only for development debugging!
    if (this._init_show) this._show(0);

    this._reset = this._reset.bind(this);
    this._show = this._show.bind(this);

    // initialize multi menu item 'active' event
    this._multiMenuItems.forEach((li, idx) => li.addEventListener('mouseenter', () => this._show(idx)))

    // initialize 'reset' event
    this._header.addEventListener('mouseleave', this._reset)
  },

  _reset: function () {
    // for debugging!
    if (this._debug) return;

    this._dropdown.classList.remove('show');
    if (this.lastActiveIndex !== null) this._multiMenuItems[this.lastActiveIndex].classList.remove('active');
    this.lastActiveIndex = null;
  },


  _show: function (idx) {
    if (!this._dropdown.classList.contains('show')) this._dropdown.classList.add('show');
    if (this.lastActiveIndex !== null) {
      this._multiMenuItems[this.lastActiveIndex].classList.remove('active');
      this._multiContent[this.lastActiveIndex].classList.remove('show');

    }
    this.lastActiveIndex = idx;
    this._multiMenuItems[idx].classList.add('active');
    this._multiContent[idx].classList.add('show')
  }



}

const dropdown = new Dropdown({ 
  // show: true,
  // debug: true
});


/**
 * Search Bar
 */

function SearchBar () {
  this._open = false;
  this._init()
}

SearchBar.prototype = {
  _init: function () {
    this._open_button = document.querySelector('header .right .search-icon');
    this._search_form = document.querySelector('header form');
    this._search_input = document.querySelector('header form input');
    this._close_button = document.querySelector('header form .close');

    this._open_button.addEventListener('click', () => {
      if (!this._open) this._search_form.classList.add('open')
      this._open = true;
    })

    this._search_form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(e.target)
      console.log('submit', {
        value: data.get('search'),
        otherValue: this._search_input.value
      })
    })

    this._search_form.addEventListener('transitionend', () => {
      this._search_input.focus();
    })

    this._search_input.addEventListener('focus', e => {
      if (e.target.value !== '') e.target.select();
    })


    this._close_button.addEventListener('click', () => {
      if (this._open) this._search_form.classList.remove('open')
      this._open = false;
    })
  }
}


const search = new SearchBar();