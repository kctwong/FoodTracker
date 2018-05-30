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
  var database = firebase.database();

  var food = "";
  var calories = "";
  var fat = '';
  var carbs = '';
  var protein = '';
//on click of submit will query spoonacular API for nutrition info of food
  $("#add-meal").on("click", function (event) {
      event.preventDefault();
      var food = $("#meal").val().trim();
      //clear pre-existing wine images
      $("#wineArea").empty();

      $.ajax({
          url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/guessNutrition?title=" + food,
          method: "GET",
          headers: {
              "X-Mashape-Key": "mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
              "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
          }
      }).then(function (response) {
          console.log(food);
          console.log(response);
          var calories = response.calories.value;
          var carbs = response.carbs.value;
          var fat = response.fat.value;
          var protein = response.protein.value;
          console.log(calories, carbs, fat, protein);
          $("#calories-input").text(calories);
          $("#fat-input").text(fat);
          $("#carbohydrates-input").text(carbs);
          $("#protein-input").text(protein);
          $(".form-control").val("");
      });
//will query spoonacular API for top 3 wine pairings for food
      $.ajax({
          url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/wine/pairing?food=" + food + "&maxPrice=100",
          method: "GET",
          headers: {
              "X-Mashape-Key": "mWSYqC5gHvmshnuUYlyxmn2HId5zp1uP4wHjsnKKFlHkkIhAvq",
              "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
          }
      }).then(function (response) {
          console.log('wine pairings')
          console.log(response);
          //shows the top 3 wines for i=[0,2]
          console.log(response.pairedWines)
          //shows wine pairing text for whatever food
          console.log(response.pairingText)
          wineChoice = response.pairedWines;
          for (var i = 0; i < wineChoice.length; i++) {
              console.log(wineChoice[i]);
              wineCall();
          }
//this function will query the LCBO wine API for each of the three top wine pairings
          function wineCall() {
              $.ajax({
                  url: 'https://lcboapi.com/products?q=' + wineChoice[i],
                  method: 'GET',
                  headers: {
                      'Authorization': 'Token MDo4MzRjY2I1MC02MGZiLTExZTgtODMzMS1iZmE1NDQ0YmJkZWE6TXJRWHdkYmF3TkZ1NTFlaERJYVZvdFZkakVzSlk3VWFSRzRk'
                  }
              }).then(function (response) {
                  console.log(response);
                  var wineLCBO = response.result[0];
                  console.log("name: " + wineLCBO.name);
                  console.log("varietal: " + wineLCBO.varietal);
                  console.log("image URL: " + wineLCBO.image_url);
                  console.log("price: $" + (wineLCBO.price_in_cents) / 100);
                  console.log("sugar in g/L: " + wineLCBO.sugar_in_grams_per_liter);
                  console.log("package: " + wineLCBO.package);
                  console.log("mL: " + wineLCBO.package_unit_volume_in_milliliters);
                  console.log('tags: ' + wineLCBO.tags);
                  console.log('style: ' + wineLCBO.style);


                  var newWine = { //left side - firebase, right side - var from your code
                      "type": wineLCBO.varietal,
                      "name": wineLCBO.name,
                      'food': food,
                      "price": (wineLCBO.price_in_cents) / 100,
                      'sugar': wineLCBO.sugar_in_grams_per_liter,
                      'package': wineLCBO.package,
                      'tags': wineLCBO.tags,
                      'style': wineLCBO.style,
                      'imageURL' : wineLCBO.image_url
                  }

                  function displayWine() {
                      var wineImage = $("<img class='winePic'>");
                      wineImage.attr('src', wineLCBO.image_url);
                      $("#wineArea").prepend(wineImage);
                      console.log(wineImage);
                      console.log('image test');
                  }
                  displayWine();
                  //this will display each of the three wine pairings under a new folder in firebase with the title of the food var
                  database.ref('/'+food).push(newWine);
                  //adds to local storage the food and wine variety as key and name of wine as value
                  localStorage.setItem(food + " " + wineLCBO.varietal, wineLCBO.name);
              });
          }
      });


      //images API
      //   $.ajax({
      //       url: 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=most_popular&phrase=' + food,
      //       method: 'GET',
      //       headers: {
      //           'Api-Key': 'wyr4aumhujeqza2t6prt6u2h'
      //       }
      //   }).then(function (response) {
      //       console.log(response);
      //       //adding food image to page
      //       var foodImage = $("<img>");
      //       foodImage.attr('src', response.images[0].display_sizes[0].uri);
      //       $('body').append(foodImage);
      //   });
  });