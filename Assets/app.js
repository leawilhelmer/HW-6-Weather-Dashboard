var fetchButton = document.querySelector('#search');
var search = document.querySelector('#searchvalue')
//var weatherIcon = `https:///openweathermap.org/img/w/${obj.key}.png`
function init(){
  var storedCities = JSON.parse(localStorage.getItem("cities"));

  if (storedCities !== null) {
      cities = storedCities;
    }
  renderCities();
}

function storeCities(){
localStorage.setItem("cities", JSON.stringify(cities));
console.log(localStorage);

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
    console.log(data);
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
      url: "http://api.openweathermap.org/data/2.5/uvi?lat=${searchvalue.lat}&lon=${searchvalue.lon}&appid=61be8bbc2bd8de4245c33d2aa432b3d1",
      method: "GET"
    }).then(function(data) {
      console.log(data);
      var UVindex = $("<p>").addClass("UVindex").text(uvResponse);
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
    console.log(data);
    $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
    var temperature = $("<p>").addClass("Temperature").text("Temp: "+ temperature + " °F");
    var humidity = $("<p>").addClass("Humidity").text("Humidity: "+ humidity + " %");
    // $(".card-body").append(temperature);
  })
}
})

