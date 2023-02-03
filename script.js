const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '91255c5847msh7aa3a5da952d709p16357djsn9fe41fed0cd9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp.innerHTML = response.temp
		wind_speed.innerHTML = response.wind_speed
		humidity.innerHTML = response.humidity
		
	})
	.catch (err => console.error(err));	
}
const getp = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=moscow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp2.innerHTML = response.temp
		wind_speed2.innerHTML = response.wind_speed
		humidity2.innerHTML = response.humidity
		
	})
	.catch (err => console.error(err));	
}
const getk = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Busan', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp3.innerHTML = response.temp
		wind_speed3.innerHTML = response.wind_speed
		humidity3.innerHTML = response.humidity		
	})
	.catch (err => console.error(err));	
}
const london = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp4.innerHTML = response.temp
		wind_speed4.innerHTML = response.wind_speed
		humidity4.innerHTML = response.humidity		
	})
	.catch (err => console.error(err));	
}
const Delhi = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		temp5.innerHTML = response.temp
		wind_speed5.innerHTML = response.wind_speed
		humidity5.innerHTML = response.humidity		
	})
	.catch (err => console.error(err));	
}

getp()
getk()
london()
Delhi()
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	
	getWeather(city.value)
})