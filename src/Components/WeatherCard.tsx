import { useState,useEffect} from "react";
import axios from 'axios';
import { useDate } from "../Utils/useDate";
import sun from '../Assets/icons/sun.png';
import cloud from '../Assets/icons/cloud.png';
import fog from '../Assets/icons/fog.png';
import rain from '../Assets/icons/rain.png';
import snow from '../Assets/icons/snow.png';
import storm from '../Assets/icons/storm.png';
import wind from '../Assets/icons/wind.png';
import Clear from '../Assets/images/clear.jpg';
import Fog from '../Assets/images/fog.jpg';
import Cloudy from '../Assets/images/cloudy.jpg';
import Snow from '../Assets/images/snow.jpg';
import Stormy from '../Assets/images/stormy.jpg';
import Sunny from '../Assets/images/sunny.jpg'; 
import Rainy from '../Assets/images/Rainy.jpg';


interface WeatherData {

  name: string;
  main: {
    temp: number;
    humidity:number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}


const api = {
  key: "fd6d13092295e1b7e11e9259c2beab17",
  base: "https://api.openweathermap.org/data/2.5/",
};
const defaultWeather: WeatherData = {
  name: "City",
  main: {
    temp: 20,
    humidity: 50, 
  },
  wind: {
    speed: 10, 
  },
  weather: [
    {
      main: "Clear",
      description: "Clear sky", 
      icon: "01d", 
    },
  ],
};

function WeatherCard() {
  const { date, time } = useDate();
  const [search, setSearch] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | undefined>(defaultWeather);
  const searchPressed = () => {
    axios.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    const weatherIcon = weather?.weather[0]?.icon;

    if (weatherIcon) {
      if (weatherIcon.includes('01')) {
        setIcon(sun);
      } else if (weatherIcon.includes('02')) {
        setIcon(cloud);
      } else if (weatherIcon.includes('03') || weatherIcon.includes('04')) {
        setIcon(cloud);
      } else if (weatherIcon.includes('09') || weatherIcon.includes('10')) {
        setIcon(rain);
      } else if (weatherIcon.includes('11')) {
        setIcon(storm);
      } else if (weatherIcon.includes('13')) {
        setIcon(snow);
      } else if (weatherIcon.includes('50')) {
        setIcon(fog);
      } else {
        setIcon(sun); 
      }
    }
  }, [weather]);
  

  const [image, setImage] = useState<string>(Clear);

  useEffect(() => {
    const weatherIcon = weather?.weather[0]?.icon;

    if (weatherIcon) {
      if (weatherIcon.includes('01')) {
        setImage(Sunny);
      } else if (weatherIcon.includes('02')) {
        setImage(Cloudy);
      } else if (weatherIcon.includes('03') || weatherIcon.includes('04')) {
        setImage(Cloudy);
      } else if (weatherIcon.includes('09') || weatherIcon.includes('10')) {
        setImage(Rainy);
      } else if (weatherIcon.includes('11')) {
        setImage(Stormy);
      } else if (weatherIcon.includes('13')) {
        setImage(Snow);
      } else if (weatherIcon.includes('50')) {
        setImage(Fog);
      } else {
        setImage(Clear);
      }
    }
  }, [weather]);



  return (
     <div className='weather'> 
        <img src={image} className='pfixed w100 h100' alt='background' />
        {weather && typeof weather.main !== "undefined" ? (
        <div>
          <div className='cfff name dflex pabs'>
              <h1>{weather.main.temp}°C</h1>
                <h1>{weather.name}</h1>
                <img src={icon} alt='weather_icon' className='imagerain h5 w5 '/>
          </div> 
            <div className="date cfff pabs">
            <p>{date}</p>
          </div>
      </div>
               ) : (
                  ""
                )} 
          <div className='container  pfixed cfff '>
          <div className='searchbar pabs'>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {weather && typeof weather.main !== "undefined" ? (
          <div className='weather-details dflex flexcol'>
           <div className='header dflex jcenter aligncenter flexcol'> 
          <h5>weather details</h5>
          <img src={icon} alt='weather_icon' className='imagerain h10 w10 dflex jcenter aligncenter '/>
          <p>Time { time}</p>
          </div>
              <p className='detail dflex sbetween'>{weather.weather[0].main}<p><p>{weather.weather[0].description}</p></p></p>
              <p className='detail dflex sbetween'>humidity<p>{weather.main.humidity}%</p></p>
              <p className='detail dflex sbetween'>wind<p>{weather.wind.speed} Km/h</p></p>
              <p className='detail dflex sbetween'>temperature<p>{weather.main.temp}°C</p></p> 

          </div>
            ) : (
              ""
            )} 

        </div>

    </div>
  );
}

export default WeatherCard;
