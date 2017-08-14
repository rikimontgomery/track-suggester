$(document).ready(function() {
  $("#suggester").submit(function() {
    formEvaluation();
    formFade ();
  });
});

var checkEmptyField = function(name, value) {
  if (value === "") {
    alert("Did you fill out the "+name+" field?");
    return (true);
  } else {
    return(false);
  }
}

var formEvaluation = function() {
  var age = $("input#age").val();
  var macPc = $("select#macPc").val();
  var swallow = $("select#swallow").val();
  // var money = parseInt($("input#money").val());
  var firstName = $("input#firstName").val();
  var courseChoice1 = " C#/.NET ";
  var courseChoice2 = " CSS/Design ";
  var courseChoice3 = " Ruby/Rails ";

if (checkEmptyField("First Name", firstName)) {
  return;
};
if (checkEmptyField("age", age)); {
  return;
}

  if (parseInt(age) < 17) {
    alert("You're never too young to learn how to program, but you don't have to decide anything today.")
    return;
  }

  if ((macPc === 'PC' && swallow === "What kind of question is that?")) {
    alert("Programming may not be for you.")
    return;
  }

  if (parseInt(age) > 80) {
    alert("I'm impressed! You're never to old to learn something new.")
  }

  if ((macPc === "PC" && swallow === "African of european?")) {
    $("#course1").empty().append(courseChoice1);
    $("#courseChoice1").fadeToggle(800);
    $("#finalMessage1").show();
  } else if ((macPc === 'Mac' && swallow === "What kind of question is that?")) {
    $("#course2").empty().append(courseChoice2);
    $("#courseChoice2").fadeToggle(800);
    $("#finalMessage2").show();
  } else {
    $("#course3").empty().append(courseChoice3);
    $("#courseChoice3").fadeToggle(800);
    $("#finalMessage3").show();
  };

  $(".firstName").text(firstName);
  event.preventDefault();
};

var formFade = function() {
  $("finalMessage1").fadeToggle(800);
  $("finalMessage2").fadeToggle(800);
  $("finalMessage3").fadeToggle(800);
  $("#suggester").fadeToggle(800);
  $("#mainCopy").fadeToggle(800);
  // $("#jumbotron").fadeToggle(800);
  // $("h1").fadeToggle(800);
  // $("img").fadeToggle(800);
};
