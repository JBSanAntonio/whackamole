$(function(){
  "use strict";
	
	var score = 0;
	var gameTime = 60;
	var startGame;
	
	/*every 2 seconds showMole*/
	$('#start').click(function (e) {
		startGame = setInterval(start, 2000);
		gameTimer();
	});

	function start() {
		randomSquare();
	}

   	/*selects a random square*/
	function randomSquare() {
		var gopher = $('.square');
		var random = Math.floor(Math.random() * 9);
		/*var toAnimate graps the square selected by Math.random*/
		var toAnimate = gopher[random];
		/*setting id = toAnimate and getting attribute by id of that square*/
		var id = toAnimate.getAttribute('id');
		showAndHideGopher(id);
	}
	/*animate Gopher pulling the selected square # by ID*/
	function showAndHideGopher(id) {
		/*concats selected random square with square's ID # to define square# */
		$('#' + id).addClass('active').fadeIn("slow");
	    setTimeout(function() {
	    	$('#' + id).removeClass('active').fadeTo("slow");
	    }, 1000);
	}

	/*game timer*/
	function gameTimer() {
		var i = 60;
		gameTime = setInterval(function() {
			if (i == 0) {
				alert("Game Over");
			var audioElement = document.createElement('audio');
				audioElement.setAttribute('src', 'forkeeps.wav');
				audioElement.play();
				clearInterval(gameTime);
				clearInterval(startGame);
				/*resetButton();*/
			}	
			$('#gameTimer').text('Time Left: ' + i);
				i--;
		},1000 );
	};


	// check if classes on both click and the box match and if they do adds one to the score
	$('.square').click(function(e) {
		var that = $(this);
	    if (that.hasClass('active')) {
	        score += 1;
	        console.log(score);
	        $('#scoreButton').text("Score: " + score);
	       }
	}); 
	/*refreshes page when game reset button clicked*/
		function resetButton() {
			location.reload(true);
		};	
			$('#resetButton').on('click', resetButton);
});


	