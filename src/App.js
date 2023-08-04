import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';
import NotFound from './components/NotFound/NotFound';

function App() {

  const [weatherData, setWeatherData] = useState([])
  const [cityName, setCityName] = useState("")
  const [isNotFound, setIsNotFound] = useState(false)

  const getWeatherDetails = () =>{
    const apiKey = "2f6e629d728725b8d8b1e44cc5b31810"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      if(data.cod === "404"){
        setIsNotFound(true)
      }else{
        setWeatherData({
          city : data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          weather: data.weather[0].main,
          windSpeed: data.wind.speed
        })
        setIsNotFound(false)
      }
    })

    setCityName("")
    
  }

  return (
    <div className="app-container">
      <div className='weather-container'>
        <h1>Weather App</h1>
        <div className='search-container'>
          <div className='search-icon'>
            <input type='text' placeholder='Search Location...' value={cityName} onChange={(e) => setCityName(e.target.value)} />
            <button className='icon-card' onClick={getWeatherDetails}>
              <SearchIcon className='icon'/>
            </button>
          </div>
        </div>
        <hr/>
        <div className='weather-card-container'>
          {isNotFound? (
              <NotFound/>
            ) : (
              <WeatherCard weatherDetails={weatherData}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
