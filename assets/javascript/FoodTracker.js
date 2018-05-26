// var movie = "Mr. Nobody";
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

//For nutritional info
// $.ajax({
//     url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/guessNutrition?title=Pasta",
//     method: "GET",
//     headers:{
//         "X-Mashape-Key":"mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
//         "X-Mashape-Host":"spoonacular-recipe-food-nutrition-v1.p.mashape.com"
//     }
//   }).then(function(response) {
//     console.log(response);
//     console.log(response.calories.value);
//     console.log(response.carbs.value);
//     console.log(response.fat.value);
//     console.log(response.protein.value);
//   });
//Wine Pairing
// var food = "Margherita Pizza";
// $.ajax({
//     url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=" + food + "&maxPrice=100",
//     method: "GET",
//     headers:{
//         "X-Mashape-Key":"mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
//         "X-Mashape-Host":"spoonacular-recipe-food-nutrition-v1.p.mashape.com"
//     }
    
//   }).then(function(response) {
//     console.log(response);
//     console.log(response.calories.value);
//     console.log(response.carbs.value);
//     console.log(response.fat.value);
//     console.log(response.protein.value);
//   });

  //pairedWines is property



//   $.ajax({
//     url: 'https://lcboapi.com/inventories',
//     method: 'GET',
//     headers: { 
//         'Authorization': 'Token MDo4MzRjY2I1MC02MGZiLTExZTgtODMzMS1iZmE1NDQ0YmJkZWE6TXJRWHdkYmF3TkZ1NTFlaERJYVZvdFZkakVzSlk3VWFSRzRk' }
//   }).then(function(data) {
//     console.log('inventories');
//     console.log(data);
//   });

//   $.ajax({
//     url: 'https://lcboapi.com/stores',
//     method: 'GET',
//     headers: { 
//         'Authorization': 'Token MDo4MzRjY2I1MC02MGZiLTExZTgtODMzMS1iZmE1NDQ0YmJkZWE6TXJRWHdkYmF3TkZ1NTFlaERJYVZvdFZkakVzSlk3VWFSRzRk' }
//   }).then(function(data) {
//     console.log('stores');
//     console.log(data);
//   });
  
  $.ajax({
    url: 'https://lcboapi.com/products?q=merlot',
    method: 'GET',
    headers: { 
        'Authorization': 'Token MDo4MzRjY2I1MC02MGZiLTExZTgtODMzMS1iZmE1NDQ0YmJkZWE6TXJRWHdkYmF3TkZ1NTFlaERJYVZvdFZkakVzSlk3VWFSRzRk' }
  }).then(function(data) {
    console.log('products');
    console.log(data);
  });

