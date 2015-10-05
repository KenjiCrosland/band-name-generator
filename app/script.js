$(function() {
  $("#name").click(function(){
    var bandText = "The ";
    $.get("/adjective", function (response){
      bandText += response.word + " ";
    })
    $.get("/noun", function (response){
      bandText += response.word + "s";
      $("#bandname").text(bandText);
    })
  });
});
