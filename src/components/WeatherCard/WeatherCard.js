import React from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import cloud from "../../images/cloud.png"
import clear from "../../images/clear.png"
import mist from "../../images/mist.png"
import rain from "../../images/rain.png"
import snow from "../../images/snow.png"
import weatherImg from "../../images/weather.png"
import "./WeatherCard.css"

function WeatherCard({weatherDetails}) {

  const {city, temperature, humidity, description, weather, windSpeed} = weatherDetails

  const temp = Math.round(temperature - 273.15);

  let weatherImage = weatherImg

  switch(weather){
    case 'Clouds':
      weatherImage = cloud
      break;
    case 'Clear':
      weatherImage = clear
      break;
    case 'Rain':
      weatherImage = rain
      break;
    case 'Mist':
      weatherImage = mist
      break;
    case 'Snow':
      weatherImage = snow
      break;
    default:
      break;
  }
 
  return (
    <>
      <div className='weather-card'>
        <span className='city'>{city? city : "Location"}</span>
        <div className='weather-image-card'>
          <img src={weatherImage} alt='cloud' className='weather-image'/>
        </div>
        <div className='temp-desc-card'>
          <p className='temp'>{temp ? `${temp}` : "--"}<sup>°C</sup></p>
          <p className='description'>{description ? description : "--"}</p>
        </div>
      </div>
      <div className='weather-details-card'>
        <div className='weather-detail'>
          <WaterDropIcon className='detail-icon'/>
          <div className='detail-card'>
            <span className='detail'>{humidity ? `${humidity}%` : "--%"}</span>
            <p className='detail'>Humidity</p>
          </div>
        </div>
        <div className='weather-detail'>
          <AirIcon className='detail-icon'/>
          <div className='detail-card'>
            <span className='detail'>{windSpeed ? `${windSpeed}Km/h` : "--Km/h"}</span>
            <p className='detail'>Speed</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard