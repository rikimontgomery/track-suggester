$(document).ready(function() {
  $("#suggester").submit(function() {
  // var age = parseInt($("input#age").val());
  var artist = $("select#artist").val();
  var macPc = $("select#macPc").val();
  // var swallow = $("#age").val();
  var money = parseInt($("input#money").val());
  // var letterBody= $("input#letterBody").val();
  var firstName = $("input#firstName").val();

  var courseChoice1 = " C#/.NET ";
  var courseChoice2 = " CSS/Design ";
  var courseChoice3 = " Java/Android ";
  var courseChoice4 = " Ruby/Rails ";

  // if (artist === 'True') {
  //   alert('Artists equals True');
  // }

  if (macPc === 'PC') {
    }

  $("#course").empty().append(courseChoice1);
  $("#courseChoice1").slideToggle(800);





  $(".firstName").text(firstName);

  $("#finalMessage").show();
  event.preventDefault();
});

  $("#suggester").submit(function() {
    $("finalMessage").slideToggle(800);
    $("#suggester").slideToggle(800);
    $(".extraText").slideToggle(800); //not sure what this does yet
    $("h1").fadeToggle(800);
  });

});
