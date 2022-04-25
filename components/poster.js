// required('aframe');

AFRAME.registerComponent('poster', {
    schema: {type: 'string'},
  
    init: function () {
      var stringToLog = this.data;
      console.log(stringToLog);
    }
});