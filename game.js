console.log('Let the safari adventure begin');

var kittenSings = ['.dia1', '.dia2', '.dia3', '.dia4', '.dia5'];

$(document).ready(function() {

//List Sequence Array with random selection


     // $('button').click(function() {
     //     var randomSequence = Math.floor(Math.random()*kittenSings.length);

  //Selecting all the diamond shapes and setting the images to hidden on screen load.
  var diamondShapes = document.querySelectorAll('.diamonds img');
    for (var k = 0; k < diamondShapes.length; k++){
      diamondShapes[k].style.visibility = 'hidden';
    }
    console.log(diamondShapes);

 // Starting the game by clicking the Let's Play button
  var letsPlay = function(){

    function showImages() {
    var img = document.getElementsByClassName('hide');
    for (var i = 0; i < diamondShapes.length; i++){
      diamondShapes[i].style.visibility = 'visible';
      }

  }

    for (var i = 0; i < diamondShapes.length; i++){
      diamondShapes[i].addEventListener('click', clickHandling);
      }
  showImages();

    var randomCat = Math.floor(Math.random()*kittenSings.length);
    var randomKitty = kittenSings[randomCat];
    letsPlay.selectedCat = randomKitty;

    }


  //The Click Handling event - Currently broken, only shows clicks on the images, doesn't matter if click let's play button
    var clickHandling = function(){

      console.log('you clicked!');

    };

    letsPlay();

    //setting up the game itself
    sequence: [];
    user: [];
    rounds: 0;

  //make the diamonds flash?
  var flash = function () {
      var lights = this;
      if(times > 0) {
        diamondShapes.stop().animate({opacity: '1'}, {duration: 50, complete: function (){diamondShapes.stop.animate({opacity: '0.6'}, 200);}
        })
      }
  }


})
