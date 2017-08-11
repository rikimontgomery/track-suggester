$(document).ready(function() {
  $("#letter").submit(function() {
  var firstName = $("input#firstName").val();
  var lastName = $("input#lastName").val();
  // var letterBody= $("input#letterBody").val();


  $(".firstName").text(firstName);
  $(".lastName").text(lastName);
  // $(".finalLetter").text(letterBody);


  $("#finalMessage").show();

  event.preventDefault();
});

  $("#letter").submit(function() {
    $("finalMessage").slideToggle(800);
    $("#letter").slideToggle(800);
    $(".extraText").slideToggle(800); //not sure what this does yet
    $("h1").slideToggle(800);
  });

});
