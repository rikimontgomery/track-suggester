$(document).ready(function() {
  $("#suggester").submit(function() {
  var age = parseInt($("input#age").val());
  var macPc = $("select#macPc").val();
  var swallow = $("select#swallow").val();
  var money = parseInt($("input#money").val());
  var firstName = $("input#firstName").val();
  var courseChoice1 = " C#/.NET ";
  var courseChoice2 = " CSS/Design ";
  var courseChoice3 = " Ruby/Rails ";

  if (age < 17) {
    alert("You're never too young to learn how to program, but you don't have to decide anything today. Break everything!")
    return;
  } else if (age > 100) {
    alert("You don't have much time! You should be traveling the world!")
    return;
  };

  if ((macPc === 'PC' && money < 50000 && swallow === "I don't know")) {
    alert("You're looking in the wrong industry.")
    return;
  } else if ((macPc === 'PC' && swallow === 'African or european?' || "I don't know" && money > 50000)) {
    $("#course1").empty().append(courseChoice1);
    $("#courseChoice1").slideToggle(800);
    $("#finalMessage1").show();
  } else if ((macPc === 'Mac' && swallow === "I don't know" && money < 50000)) {
    $("#course2").empty().append(courseChoice2);
    $("#courseChoice2").slideToggle(800);
    $("#finalMessage2").show();
  } else {
    $("#course3").empty().append(courseChoice3);
    $("#courseChoice3").slideToggle(800);
    $("#finalMessage3").show();
  };

  $(".firstName").text(firstName);
  event.preventDefault();
  });

    $("#suggester").submit(function() {
      $("finalMessage1").slideToggle(800);
      $("finalMessage2").slideToggle(800);
      $("finalMessage3").slideToggle(800);
      $("#suggester").slideToggle(800);
      $("#mainCopy").slideToggle(800);
      $("#jumbotron").slideToggle(800);
      $("h1").fadeToggle(800);
    });

});
