$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    var name = $("quest0").val();
    var answer1 = $("#quest2").val();
    var answer2 = $("#quest3").val();
    var answer3 = $("#quest4").val();
    var answer4 = $("#quest5").val();
    var result;

    if (answer1 = "Tropical" && answer2 === "Neither" || answer2 === "Hiking" && answer3 === "Beaches" && answer4 === "Yes" || answer4 === "No" || answer4 === "Yes") {
      result = "Kamalame Cay, Bahamas.";
    } else if (answer1 === "Temperate" && answer2 === "Hiking" && answer3 === "I would like both" || answer3 === "Forests" || answer3 === "Beaches" && answer4 === "No" || answer4 = "Yes") {
      result = "Mackinac State Park, Michigan.";
    } else if (answer1 === "Temperate" && answer2 === "Hiking" && answer3 === "Forests" || answer3 === "Beaches" || answer3 === "I would like both" && answer4 === "Yes") {
      result = "Lake Annecy, French Alps.";
    } else if () {
      result = "Puglia, Italy.";
    } else if () {
      result = "the Pacific Crest, West Coast, USA."
    } else if () {
      result = "Baraga, Michigan."
    } else if () {
      result = "Arctic Express, Greenland."
    }

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
    }
  });
});
