
import { useEffect } from 'react'


function Weather_card({city,weather,loading,error}) {
  useEffect(() => {
    if (!loading && weather === null && city !== "" && error) {
      alert("City not found");
    }
  }, [weather,  city,loading,error]);
  if(loading){
      return(<h1>Loading...</h1>)
    }
  if(weather===null && city!="" && error){
    return(
      <>    <div className="weather-card">weather card</div>
    <div className="weather-info">
    <h3 className="credentials">Location:{city}</h3>
    
    <h3 className="credentials">Temperarture: {"not avalible"}</h3>
    <h3 className="credentials">Description: {"not available"}</h3>
    </div>
    <div className="weather-details">
      <h2 className="details">Humidity: {"not available"}</h2>
      <h2 className="details">Wind Speed: {"not available"} </h2>
      <h2 className="details">feels like {"not available"}</h2>
      
    </div>

    </>
    )
  }else if(weather!==null && !error && city!==""){
  
  return (
    <>    <div className="weather-card">weather card</div>
    <div className="weather-info">
    <h3 className="credentials">Location:{city}</h3>
    
    <h3 className="credentials">Temperarture: {weather.main.temp}°C</h3>
    <h3 className="credentials">Description: {weather.weather[0].description}<img src={`//openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather Icon"/></h3>
    </div>
    <div className="weather-details">
      <h2 className="details">Humidity: {weather.main.humidity}%</h2>
      <h2 className="details">Wind Speed: {weather.wind.speed} km/h</h2>
      <h2 className="details">feels like {weather.main.feels_like}°C</h2>
    </div>

    </>
  )}
}

export default Weather_card