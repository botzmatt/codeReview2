$(document).ready(function() {
  $("form").submit(function(event) {

    var name = $("quest0").val();
    var answer1 = $("#quest2").val();
    var answer2 = $("#quest3").val();
    var answer3 = $("#quest4").val();
    var answer4 = $("#quest5").val();
    var result;

    if (answer1 === "Tropical") {
      result = "Kamalame Cay, Bahamas.";
    } else if (answer1 === "Arctic") {
      result = "Arctic Express, Greenland.";
      }else if (answer3 === "Forests" && answer4 === "No") {
      result = "Mackinac State Park, Michigan.";
    } else if (answer3 === "Forests" && answer4 === "Yes") {
      result = "Lake Annecy, French Alps.";
    } else if (answer1 != "Tropical" && answer3 === "Beaches" && answer4 === "Yes") {
      result = "Puglia, Italy.";
    } else if (answer2 === "Hiking" && answer3 === "Forests" && answer4 === "Yes" || answer2 === "Hiking" && answer4 === "No") {
      result = "the Pacific Crest, West Coast, USA.";
    } else if (answer2 === "Climbing" && answer3 === "Forests") {
      result = "Baraga, Michigan.";
    };

    $("#output").text(name + ", your optimal destination is " + result);

    if (result === "Kamalame Cay, Bahamas.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#beach").show();
    } else if (result === "Mackinac State Park, Michigan.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#beachandforest").show();
    } else if (result === "Lake Annecy, French Alps.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#sunsetForest").show();
    } else if (result === "Puglia, Italy.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#sunsetBeach").show();
    } else if (result === "the Pacific Crest, West Coast, USA.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#hiking").show();
    } else if (result === "Baraga, Michigan.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#climbing").show();
    } else if (result === "Arctic Express, Greenland.") {
      $("#beach, #arctic, #beachandforest, #sunsetForest, #sunsetBeach, #hiking, #climbing").hide();
      $("#arctic").show();
    };
    event.preventDefault();
  });
});
