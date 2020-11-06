fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Oakland,CA&cnt=6&appid=61be8bbc2bd8de4245c33d2aa432b3d1", {
	"method": "GET",
	"headers": {
		"OpenWeather API-key": "61be8bbc2bd8de4245c33d2aa432b3d1",
	}
})
.then(response =>
    response.json()
)
    
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error);
})

