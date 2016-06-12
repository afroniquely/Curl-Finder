console.log('Let the safari adventure begin');

var kittenSings = ['.dia1', 'dia2', 'dia3', 'dia4', 'dia5'];

$(document).ready(function() {

//List Sequence Array with random selection


     // $('button').click(function() {
     //     var randomSequence = Math.floor(Math.random()*kittenSings.length);

  //Selecting all the diamond shapes
  var diamondShapes = document.querySelectorAll('.diamonds img');
    console.log(diamondShapes);

 var letsPlay = function(){
    for (var k = 0; k < diamondShapes.length; k++){
      diamondShapes[k].addEventListener('click', clickHandling);
    }
  }

  function showImages() {var img = document.getElementsByClassName('hide');}

//The Click Handling event
  var clickHandling = function(){
    console.log('you clicked!');

  };

  letsPlay();
})

/* Getting the diamonds to show the images after being clicked.
  - figure out why previous methods of making diamonds flip don't work
*/
