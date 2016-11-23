window.onload = function(){  
  var foods;

  $.getJSON("data/fodmap.json", function(data) {
    foods = data;
  });
  
  function searchFoods(foodName){
    // for (var i; i < foods.size(); foods++){
    //   foods.searchSomething("");
    // }

    for (var f of foods){
      for (var n of f.food){
        if (n == foodName){
          
        } 
        console.log(foodName); 
      }
    }

    var background = "green";
    var status = "yes";

    return [background, status];
  }

  $("#canieatthis").submit(function(e) { 
    e.preventDefault();
    var foodInput = $("#food").val();
    var results = searchFoods(foodInput);

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

