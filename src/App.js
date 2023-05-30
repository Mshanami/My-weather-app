import react from 'react';
import './App.css';
import axios from 'axios';
import cold from './cold.jpg';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiLocationOutline } from "react-icons/ti";
import { WiCloudy, WiCelsius, WiWindy, WiHumidity } from 'react-icons/wi';
import { BsThermometerHalf } from "react-icons/bs";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [flike, setFlike] = useState('');
  const [humidity, setHumidity] = useState('');
  const [speed, setSpeed] = useState('');
  
    const today = new Date();
    const dayOfWeek = today.toLocaleString('default', {weekday : 'long'});
    const date = today.toLocaleString('default',{ day: 'numeric', month: 'long'});

  const changeCity = (event) =>{
    setCity(event.target.value)
  }
  const fetchData = async () =>{
      fetch('https://api.api-ninjas.com/v1/weather?city=' + city, {
    
   "method": "GET",
   "headers": {
     'X-Api-Key': '/49MvzZK96l4l3uyoXBPBA==zBegcro3P0xGlGFV'
   }
   })
  .then(response => response.json())
  .then(data=> { setTemp(data.temp);
                 setFlike(data.feels_like);
                 setHumidity(data.humidity);
                 setSpeed(data.wind_speed);
}
 )
}
 const handleKeyDown = (event) => {
  if(event.key ==='Enter'){
    fetchData();
  }
 };
 

     
  return (
    <div className="App">
    <div className="topsection">
    <p className="question">How's the weather there?</p>
    <div className="search">
    
    
     
     <input 
       type="text"
       value={city} 
       placeholder="Enter your location" 
       onChange={changeCity}
       onKeyPress={handleKeyDown} 
       
        />
    
    
    </div>
    <p className="day">{dayOfWeek}, {date}</p>
    </div>
     <div className="container">
      <div className="top-container">
       <p className="location"><TiLocationOutline style={{fontSize:'30px', paddingTop:'15px'}} />{city}</p>
       <h1 className="degree">{temp}°C</h1>

       <WiCloudy style={{color:'azure', fontSize:'150px'}} />
       <p className="description"></p>

      </div>
      <div className="bottom-container">
       <p className="extras"><p>{flike}°C</p><p>Feels like</p><BsThermometerHalf style={{fontSize: '35px'}} /></p>
       <p className="extras"><p>{humidity}%</p><p>Humidity</p><WiHumidity style={{fontSize: '35px'}} /></p>
       <p className="extras"><p>{speed}MPH</p><p>Wind speed</p><WiWindy style={{fontSize: '35px'}} /></p>

      </div>


     </div>
    </div>
  );
}

export default App;
