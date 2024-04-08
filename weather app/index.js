const apikey = "f9451b94ac1fbc3c5b1499aa1ccc35fe";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch( apiUrl  +  city + `&appid=${apikey}`);
  
  
  var data = await response.json();

      console.log(data);


      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      
      
       
        
      }
      

      searchBtn.addEventListener("click" , ()=>{

        checkWeather(searchBox.value);

})
    