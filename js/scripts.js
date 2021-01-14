$(document).ready(function() {
  $("form").submit(function(event) {
    let yourName = $("input#name").val();
    $("#your-name").text("name");
    $(".page1").hide();
    $(".letter").show();
    event.preventDefault();
  });
});