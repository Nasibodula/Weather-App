import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios from 'axios';



interface WeatherData {
  wspd: number;
  humidity: number;
  temp: number;
  conditions: string; // Modify the interface to match the OpenWeather API response
}

interface StateContextType {
  weather: WeatherData;
  place: string;
  thisLocation: string;
  setPlace: (place: string) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({ children }) => {
  const [weather, setWeather] = useState<WeatherData>({
    wspd: 0,
    humidity: 0,
    temp: 0,
    conditions: ''
  });
  const [place, setPlace] = useState<string>('Jaipur');
  const [thisLocation, setLocation] = useState<string>('');

  // fetch api
  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: place,
          appid: apiKey,
          units: 'metric'
        }
      });

      console.log(response.data);

      const { main, weather: [{ description }] } = response.data;
      
      setWeather({
        wspd: 0, // No wind speed in the current weather API, you may adjust this if needed
        humidity: main.humidity,
        temp: main.temp,
        conditions: description
      });

      setLocation(response.data.name);
    } catch (error) {
      console.error(error);
      alert('Error fetching weather data. Please try again.');
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [place]);

  const contextValue: StateContextType = {
    weather,
    place,
    thisLocation,
    setPlace
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
}