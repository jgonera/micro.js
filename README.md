micro.js
========
Tiny jQuery plugins solving common problems.


micro.autosize
--------------

Autoresizing textareas.

### Usage

```js
$('textarea').microAutosize();

// resizing after manual content change
$('textarea').val('my content').trigger('input');
```


micro.tap
---------

Quick taps with no delays on mobile browsers.

Adds a `tap` event in jQuery with the minimal amount of code. When touch
events are present `tap` fires on `touchend`. For browsers without touch
events support falls back to `mouseup` event.

Ghostclick prevention inspired by https://developers.google.com/mobile/articles/fast_buttons

### Usage

```js
$('button').on('tap', function() { ... });
$('a').on('tap', function(ev) {
  // don't follow the link
  ev.preventDefault();
  ...
});
```

