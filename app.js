var fetchButton = document.querySelector('#search');
var search = document.querySelector('#searchvalue')


function initCityList() {
  var storedCities = JSON.parse(localStorage.getItem("cities"));
  
  if (storedCities !== null) {
      cityList = storedCities;
  }
  
  renderCities();
  }

function FormatDay(date){
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();
    
    var dayOutput = date.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return dayOutput;
}


$(document).ready(function(){
  $('#search').on("click", function () {
  var searchvalue = $('#searchvalue').val();
  currentWeather(searchvalue);
})
function currentWeather(searchvalue) {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+searchvalue+"&appid=61be8bbc2bd8de4245c33d2aa432b3d1&units=imperial",
    method: "GET"
  }).then(function(data) {
    $("#today").empty();
    var cityname = $("<h3>").addClass("City").text(data.name + " "+ FormatDay());
    $(".card-body").append(cityname);
    var temperature = $("<p>").addClass("Temperature").text("Temperature: "+ data.main.temp + " °F");
    $(".card-body").append(temperature);
    var humidity = $("<p>").addClass("Humidity").text("Humidity: "+ data.main.humidity + " %");
    $(".card-body").append(humidity);
    var wind = $("<p>").addClass("Wind").text("Wind Speed: "+ data.wind.speed + " MPH");
    $(".card-body").append(wind)
    
  })
  function currentWeather(searchvalue) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/uvi?lat="+ response.coord.lat +"&lon="+ response.coord.lon +"&appid=61be8bbc2bd8de4245c33d2aa432b3d1",
      method: "GET"
    }).then(function(data) {
      console.log(data);
      var UVindex = $("<p>").addClass("UVindex").text("UV Index: "+ + "");
    $(".card-body").append(UVindex)
    })
  }
}
})

$(document).ready(function(){
  $('#search').on("click", function () {
  var searchvalue = $('#searchvalue').val();
  weatherForecast(searchvalue);
})
function weatherForecast(searchvalue) {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q="+searchvalue+"&appid=61be8bbc2bd8de4245c33d2aa432b3d1&units=imperial",
    method: "GET"
  }).then(function(data){
    $("#forecast").html("<h4 class=\"mt-4\">5-Day Forecast:</h4>").append("<div class=\"row\">");
    for (var i = 0; i < data.list.length; i++) {

      if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

          var titleFive = $("<h3>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
          var imgFive = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

          var colFive = $("<div>").addClass("col-sm-2");
          var cardFive = $("<div>").addClass("card bg-primary text-white");
          var cardBodyFive = $("<div>").addClass("card-body p-2");
          var tempFive = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp + " °F");
          var humidFive = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

          colFive.append(cardFive.append(cardBodyFive.append(titleFive, imgFive, tempFive, humidFive)));
          $("#forecast .row").append(colFive);
        }
      }
  });
}
})