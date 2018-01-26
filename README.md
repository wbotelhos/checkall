# jQuery Checkall - A Checkbox Checker

[![Build Status](https://img.shields.io/travis/wbotelhos/checkall/master.svg)](https://travis-ci.org/wbotelhos/checkall)
[![NPM Version](https://badge.fury.io/js/checkall.svg)](https://badge.fury.io/js/checkall)
[![Dependency](https://david-dm.org/wbotelhos/checkall.svg)](https://david-dm.org/wbotelhos/checkall)
[![Dev Dependency](https://david-dm.org/wbotelhos/checkall/dev-status.svg)](https://david-dm.org/wbotelhos/checkall#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/checkall.png)](https://codeclimate.com/github/wbotelhos/checkall)
[![Support](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://liberapay.com/wbotelhos)

## Options

```js
all:  '.checkall__all'  // Checkbox responsible to check all of a group.
item: '.checkall__item' // Checkboxes in the group.
```

## Usage

```html
<script src="jquery.checkall.js"></script>

<div class="check">
  <input type="checkbox" class="checkall__all">

  <input type="checkbox" class="checkall__item">
  <input type="checkbox" class="checkall__item">
</div>
```

```js
$('.checkall').checkall();
```

## Contributors

[Check it out](http://github.com/wbotelhos/checkall/graphs/contributors)

## Love it!

Via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=checkall) or [Support](https://liberapay.com/wbotelhos). Thanks! (:
