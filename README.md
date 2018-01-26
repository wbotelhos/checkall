# jQuery Checky - A Checkbox Checker

[![Build Status](https://img.shields.io/travis/wbotelhos/checky/master.svg)](https://travis-ci.org/wbotelhos/checky)
[![NPM Version](https://badge.fury.io/js/checky.svg)](https://badge.fury.io/js/checky)
[![Dependency](https://david-dm.org/wbotelhos/checky.svg)](https://david-dm.org/wbotelhos/checky)
[![Dev Dependency](https://david-dm.org/wbotelhos/checky/dev-status.svg)](https://david-dm.org/wbotelhos/checky#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/checky.png)](https://codeclimate.com/github/wbotelhos/checky)
[![Support](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://liberapay.com/wbotelhos)

## Options

```js
all:  '.checky__all'  // Checkbox responsible to check all of a group.
item: '.checky__item' // Checkboxes in the group.
```

## Usage

```html
<script src="jquery.checky.js"></script>

<div class="check">
  <input type="checkbox" class="checky__all">

  <input type="checkbox" class="checky__item">
  <input type="checkbox" class="checky__item">
</div>
```

```js
$('.checky').checky();
```

## Contributors

[Check it out](http://github.com/wbotelhos/checky/graphs/contributors)

## Love it!

Via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=checky) or [Support](https://liberapay.com/wbotelhos). Thanks! (:
