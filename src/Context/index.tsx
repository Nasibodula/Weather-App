import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios, { AxiosRequestConfig } from 'axios';

interface WeatherData {
    [key: string]: any;
}

interface WeatherValue {
    datetime: string;
    temp: number;
    precipitation: number;
    windspeed: number;
    windgust: number;
    cloudcover: number;
    conditions?: string;
    humidity?: number | undefined;
    heatindex?: number;

}

interface StateContextType {
    weather: WeatherValue;
    setPlace: (place: string) => void;
    values: WeatherValue[];
    thisLocation: string;
    place: string;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateContextProvider = ({ children }: { children: ReactNode }) => {
    const [weather, setWeather] = useState<WeatherValue>({ datetime: "", temp: 0, precipitation: 0, windspeed: 0, windgust: 0, cloudcover: 0 });
    const [values, setValues] = useState<WeatherValue[]>([]);
    const [place, setPlace] = useState<string>('Jaipur');
    const [thisLocation, setLocation] = useState<string>('');

    // fetch api
    const fetchWeather = async () => {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            params: {
                q: place,
                appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
                units: 'metric'
            }
        };

        try {
            const response = await axios.request<WeatherData>(options);
            console.log(response.data);
            const thisData = response.data;
            setLocation(thisData.city.name);
            setValues(thisData.list);
            setWeather(thisData.list[0]);
        } catch (e) {
            console.error(e);
            // if the api throws error.
            alert('This place does not exist');
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useStateContext must be used within a StateContextProvider');
    }
    return context;
};
