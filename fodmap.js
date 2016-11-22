window.onload = function(){
  
  var fodCSV;
  function preload() {
    fodCSV = loadJSON("/data/fodmap.json"); 
  }
  
  $("#canieatthis").submit(function(e) { 
    e.preventDefault();
    var foodInput = $("#food").val();
    console.log(foodInput);
    var results;

    if (foodInput == "tomato"){
      results = ["green", "YES"]; 
    } else if (foodInput == "bread"){
      results = ["red", "NO"]; 
    } else {
      results = ["black", "NO RESULT"]; 
    }

    $("#result-overlay").css({
      background: results[0]
    }).show();

    $("#result").html(results[1]);
  });

  $(window).keyup(function(e) {
    var overlay = $("#result-overlay");
    if (e.which == 27 && overlay.is(":visible")){
      overlay.hide(); 
      $("#food").val("");
    } 
  });
};
