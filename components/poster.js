require('aframe');

AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});

AFRAME.registerComponent('foo', {
  init: function () {
    console.log(this.el.sceneEl);  // Reference to the scene element.
  }
});

var sceneEl = document.querySelector('a-scene');
console.log(sceneEl.querySelector('#redBox'));
// const textEl = sceneEl.querySelector('a-text');
// console.log(textEl.outerHTML())