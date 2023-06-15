

  


    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "22c418e672msh95538c6c4885b97p1dc06djsnf3c6e382e837",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
  
    const cityNameElement = document.querySelectorAll('.cityName');
    const tempElement = document.querySelectorAll('.temp');
    const minTempElement = document.querySelectorAll('.min_temp');
    const max=document.querySelectorAll('.max_temp');
    const hum=document.querySelectorAll('.humidity');
    const wind_speed=document.getElementById('windspeed');
    const wind_degrees=document.getElementById('winddeg');
    const sunrise=document.getElementById('sunrise');
    const sunset=document.getElementById('sunset');
    const cloud_pct=document.getElementById('cp');
    const feels_like=document.getElementById("feelslike");
    





    //values in the table (other cities temp)



    const cities = [
      { name: "Hyderabad", elementId: "temp_hyd" },
      { name: "Vikarabad", elementId: "temp_vikarabad" },
      { name: "Tandur", elementId: "temp_tandur" },
      { name: "Bangalore", elementId: "temp_bangalore" },
      { name: "Delhi", elementId: "temp_delhi" }
    ];

    
const getInfo = (city) => {
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city.name, options)
    .then((response) => response.json())
    .then((response) => {
      const tempele = document.getElementById(city.elementId);
      tempele.innerHTML = response.temp;
    })
    .catch((error) => {
      console.error(error);
    });
};

cities.forEach((city) => {
  getInfo(city);
});





const cities2 = [
  { name: "Hyderabad", elementId: "min_temp_hyd" },
  { name: "Vikarabad", elementId: "min_temp_vikarabad" },
  { name: "Tandur", elementId: "min_temp_tandur" },
  { name: "Bangalore", elementId: "min_temp_bangalore" },
  { name: "Delhi", elementId: "min_temp_delhi" }
];

const getInfo2 = (city) => {
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city.name, options)
    .then((response) => response.json())
    .then((response) => {
      const mintempele = document.getElementById(city.elementId);
      mintempele.innerHTML = response.min_temp;
    })
    .catch((error) => {
      console.error(error);
    });
};

cities2.forEach((city) => {
  getInfo2(city);
});








const cities3 = [
  { name: "Hyderabad", elementId: "max_temp_hyd" },
  { name: "Vikarabad", elementId: "max_temp_vikarabad" },
  { name: "Tandur", elementId: "max_temp_tandur" },
  { name: "Bangalore", elementId: "max_temp_bangalore" },
  { name: "Delhi", elementId: "max_temp_delhi" }
];

const getInfo3
 = (city) => {
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city.name, options)
    .then((response) => response.json())
    .then((response) => {
      const maxtempele = document.getElementById(city.elementId);
      maxtempele.innerHTML = response.max_temp;
    })
    .catch((error) => {
      console.error(error);
    });
};

cities3.forEach((city) => {
  getInfo3(city);
});







    //(end of other cities)






//main city code

const getWeather = (city) => {
  cityNameElement.forEach((element) => (element.innerHTML = city));
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      tempElement.forEach((element) => (element.innerHTML = response.temp));
      minTempElement.forEach((element) => (element.innerHTML = response.min_temp));
      max.forEach((element) => (element.innerHTML = response.max_temp));
      hum.forEach((element) => (element.innerHTML = response.humidity));
      wind_speed.innerHTML=response.wind_speed;
      wind_degrees.innerHTML=response.wind_degrees;
      sunrise.innerHTML=response.sunrise;
      sunset.innerHTML=response.sunset;
      cloud_pct.innerHTML=response.cloud_pct;
      feels_like.innerHTML=response.feels_like;


      
    })
    .catch((error) => {
      console.error(error);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Hyderabad");


//end of main city code


