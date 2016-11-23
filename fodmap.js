window.onload = function(){  
  var foods;

  $.getJSON("data/fodmap.json", function(data) {
    foods = data;
  });
  
  function searchFoods(foodName){
    for (var f of foods){
      for (var n of f.food){
        if (n == foodName){
          return f.edible;
        }
      }
    }

    return "no result";
  }

  function getBackground(edible){
    if (edible == "yes" || edible == "yes with limits"){
      return "green";
    } else if (edible == "no" || edible == "no with limits"){
      return "red";
    } else {
      return "black";
    }
  }

  $("#canieatthis").submit(function(e) { 
    e.preventDefault();
    var foodInput = $("#food").val();
    var result = searchFoods(foodInput);

    $("#result-overlay").css({
      background: getBackground(result)
    }).show();

    $("#result").html(result);
  });

  $(window).keyup(function(e) {
    var overlay = $("#result-overlay");
    if (e.which == 27 && overlay.is(":visible")){
      overlay.hide(); 
      $("#food").val("");
    } 
  });
};

