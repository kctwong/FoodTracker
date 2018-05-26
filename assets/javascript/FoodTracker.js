// var movie = "Mr. Nobody";
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// $.ajax({
//     url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
var http = require('http');
var fs = require('fs');

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search?query=banana&offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0")
.header("X-Mashape-Key", "mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
