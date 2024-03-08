import React from 'react';
import { StateContextProvider, useStateContext } from './Context/index';
import {WeatherCard} from './Components' ;
import MiniCard from './Components/MiniCard' ;
import { Background } from './Components';
import search from './Assets/icons/search.png'
import { useState } from 'react'
import './App.css'
import WeatherData from './Context/context';
// import {fetchWeather} from './Context/index'

const App = () => {
  return (
    // <WeatherData/>
    <StateContextProvider>
      <AppContent />
    </StateContextProvider>
  );
};

const AppContent = () => {
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  const [input, setInput] = useState('Nairobi')

  const submitCity = () => {

    setPlace(input);
    setInput('')
  };

  return (
    <div className='dflex cfff w100 h100'>
      <Background/>
      <nav className='navbar dflex w100 h5 sbetween aligncenter'>
        <h1 className='b'>Weather App</h1>
        <div className='searchbar dflex'>
          <img src={search} alt="search" className='search' />
          <input 
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder='Search city'
            className=''
            value={input}
            onChange={e=> setInput(e.target.value)} />
        </div>
      </nav>
      <main className='main-content'>
        <WeatherCard 
          place={thisLocation}
          windspeed={weather.windspeed !== undefined ? weather.windspeed : 0}
          humidity={weather.humidity !== undefined ? weather.humidity : 0}
          temperature={weather.temp !== undefined ? weather.temp : 0}
          heatIndex={weather.heatindex !== undefined ? weather.heatindex : 0}
          iconString={weather.conditions !== undefined ? weather.conditions : ""}
          conditions={weather.conditions !== undefined ? weather.conditions : ""}
        />

        <div className='minicard'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard 
                  key={curr.datetime !== undefined ? curr.datetime :0}
                  time={curr.datetime}
                  temp={curr.temp !== undefined ? curr.temp :0}
                  iconString={curr.conditions ?? ""}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  );
};
export default App;


