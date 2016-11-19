window.onload = function(){

  var fodCSV;

  function preload() {
    fodCSV = loadJSON("/data/fodmap.json"); 
  }
  
  document.getElementById("canieatthis").addEventListener("submit", function(event) {
    document.getElementById("result-overlay").style.visibility = "hidden"; 
    event.preventDefault();
    var foodInput = document.getElementById("food").value;
    console.log(foodInput);
    
    var results;

    if (foodInput == "tomato"){
      results = ["visible", "green", "YES"]; 
    } else if (foodInput == "bread"){
      results = ["visible", "red", "NO"]; 
    } else {
      results = ["visible", "black", "NO RESULT"]; 
    }

    document.getElementById("result-overlay").style.visibility = results[0]; 
    document.getElementById("result-overlay").style.background = results[1]; 
    document.getElementById("result").innerHTML = results[2];
  });
};