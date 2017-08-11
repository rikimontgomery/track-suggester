$(document).ready(function() {
  $("#suggester").submit(function() {
  var firstName = $("input#firstName").val();
  // var lastName = $("input#lastName").val();
  // var letterBody= $("input#letterBody").val();


  $(".firstName").text(firstName);
  // $(".lastName").text(lastName);
  // $(".finalLetter").text(letterBody);


  $("#finalMessage").show();

  event.preventDefault();
});

  $("#suggester").submit(function() {
    $("finalMessage").slideToggle(800);
    $("#suggester").slideToggle(800);
    $(".extraText").slideToggle(800); //not sure what this does yet
    $("h1").slideToggle(800);
  });

});
