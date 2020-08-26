alert(" start by hitting any key on destop for mobile press the start button then follow the sequence from the first colour. repeat the sequence from 1st level to next following last level ");
alert("i.e after clicking the first level colour, on second level press level 1 color and level 2 color so on and so fourth ");

var buttonColors = ["red", "blue", "green", "yellow"];

//to add random colors for the level
var pattern = [];

//to record user clicks
var userClickedPattern = [];

var start = false;
var level = 0;

$("body").keydown(function() {
  if (!start) {
    $("#title").text("Level " + level);
    random();
    start = true;
  }
});

// to handel the user clicks sand add to the userClickedPattern array
$(".btn").click(function() {
  var userchossenButton = $(this).attr("id");;
  userClickedPattern.push(userchossenButton);

  playSound(userchossenButton);
  press(userchossenButton);

  check(userClickedPattern.length - 1);

});

//to check the user funtion with the genereated function
function check(currentlevel) {

  if (pattern[currentlevel] === userClickedPattern[currentlevel]) {
    console.log("sucess");


    if (pattern.length === userClickedPattern.length) {
      setTimeout(function() {
        random();
      }, 1000);
    }
  } else {

    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
 $("#title").text("Game Over Press any key to Restart. ");
    startOver();

  }
}

//to genrate the random color and add to the pattern array
function random() {

  userClickedPattern = [];

  level++;
  $("#title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomColor = buttonColors[randomNumber];
  pattern.push(randomColor);

  $("#" + randomColor).fadeOut(100).fadeIn(100);

playSound(randomColor);
}


// playing the sound from randomColor and user clicks
function playSound(name) {
  var audio = new Audio("sounds\\" + name + ".mp3");
  audio.play();
}


//funtion to animate the clicked buttons
function press(curentColor) {
  $("#" + curentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + curentColor).removeClass("pressed");
  }, 100);

}

function startOver() {
  level = 0;
  pattern = [];
  start = false;

}

$(".footer").click(function(){
random();
})
