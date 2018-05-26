  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjOZYeHYU1gc7YLAbhuDKaKhQ8--1f1f8",
    authDomain: "food-tracker-90c0e.firebaseapp.com",
    databaseURL: "https://food-tracker-90c0e.firebaseio.com",
    projectId: "food-tracker-90c0e",
    storageBucket: "",
    messagingSenderId: "277573844017"
  };
  firebase.initializeApp(config);

// For nutritional info
$.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/guessNutrition?title=Pasta",
    method: "GET",
    headers:{
        "X-Mashape-Key":"mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
        "X-Mashape-Host":"spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  }).then(function(response) {
    console.log(response);
    console.log(response.calories.value);
    console.log(response.carbs.value);
    console.log(response.fat.value);
    console.log(response.protein.value);
  });

// Wine Pairing

var food = "Margherita Pizza";
$.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=" + food + "&maxPrice=100",
    method: "GET",
    headers:{
        "X-Mashape-Key":"mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
        "X-Mashape-Host":"spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
    
  }).then(function(response) {
    console.log(response);
    console.log(response.pairedWines)
    console.log(response.pairedWines[0])
    wineChoice = response.pairedWines[0];
    wineCall();
  });

  var wineChoice;

  //pairedWines is property
  
  function wineCall(){
  $.ajax({
    url: 'https://lcboapi.com/products?q=' + wineChoice,
    method: 'GET',
    headers: { 
        'Authorization': 'Token MDo4MzRjY2I1MC02MGZiLTExZTgtODMzMS1iZmE1NDQ0YmJkZWE6TXJRWHdkYmF3TkZ1NTFlaERJYVZvdFZkakVzSlk3VWFSRzRk' }
  }).then(function(response) {
    console.log('products');
    console.log(response);
    var firstWineChoice = response.result[0].name;
    var secondWineChoice = response.result[1].name;
    var thirdWineChoice = response.result[2].name;
    console.log(firstWineChoice, secondWineChoice, thirdWineChoice);
  });
}

//images API
    $.ajax({
      url: 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=spaghetti',
      method: 'GET',
      headers: { 
          'Api-Key':'wyr4aumhujeqza2t6prt6u2h'}
    }).then(function(response) {
        console.log(response);
        document.write(response.images[0].display_sizes[0].uri);
    });
  
