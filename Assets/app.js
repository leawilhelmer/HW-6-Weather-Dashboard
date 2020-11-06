var fetchButton = document.querySelector('#submit');

// function getApi() {
//     var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=delhi&cnt=5&appid=61be8bbc2bd8de4245c33d2aa432b3d1';

// fetch(requestUrl)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function(data) {
//     for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//   }
// });
// }

// fetchButton.addEventListener('click', getApi);

var formSubmitHandler = function (event) {
    event.preventDefault();
  
  
  var getUserRepos = function (user) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=delhi&cnt=5&appid=61be8bbc2bd8de4245c33d2aa432b3d1' + user + '/repos';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to weather');
      });
  };

  };
  
  fetchButton.addEventListener('#submit', formSubmitHandler);
  
  