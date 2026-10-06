
import Weather_card from './components/Weather_card'
import Search_bar from './components/Search_bar'
import './App.css'
import { useState,useEffect } from 'react'
import snow from './assets/snow.jpg'
import rainy from './assets/rainy.jpg'
import sunny from './assets/sunny.jpg'
import cloudy from './assets/cloudy.jpg'



function App() {
   const[city,setcity]=useState("Delhi");
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(false);
   const[error,seterror]=useState(false);
  

   let backgroundImage = sunny; // Default background image

if (weather?.weather[0].main === "Clear") {
  backgroundImage = sunny;
}
else if (weather?.weather[0].main === "Clouds") {
  backgroundImage = cloudy;
}
else if (weather?.weather[0].main === "Rain") {
  backgroundImage = rainy;
}
else if (weather?.weather[0].main === "Snow") {
  backgroundImage = snow;
}
  const background={
  backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '120vh',
    height:"100%",

   }
   const getWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41d925c219f034eb6566927a47dc353d&units=metric`;
  setLoading(true);
  const response = await fetch(url);
  
  if(response.ok){
  const data = await response.json();
  setWeather(data);
seterror(false);
setLoading(false);
}
  
  else{setWeather(null);
  setLoading(false);
  seterror(true);}
 
};

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCoordinates(lat, lon);
    },
    (error) => {
      console.log("Location error:", error);
      seterror(true);
    }
  );
};

const getWeatherByCoordinates = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41d925c219f034eb6566927a47dc353d&units=metric`;
  setLoading(true);
  const response = await fetch(url);
  
  if(response.ok){
    const data = await response.json();
    setWeather(data);
    setcity(data.name);
    seterror(false);
    setLoading(false);
  }
  else{
    setWeather(null);
    setLoading(false);
    seterror(true);
  }
};




useEffect(() => {
        getWeather();
    }, [city]);

  return (
    <div style={background}>
      <Search_bar setcity={setcity} getCurrentLocation={getCurrentLocation} />
      <Weather_card city={city} weather={weather} loading={loading} error={error}  />
    </div>
  )
}


export default App