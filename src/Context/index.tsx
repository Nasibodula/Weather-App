import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import axios from 'axios';

const api = {
    key: "fd6d13092295e1b7e11e9259c2beab17",
    baseURL: "https://api.openweathermap.org/data/2.5/",
};

interface WeatherValue {
    datetime: string;
    temp: number;
    precipitation: number;
    windspeed: number;
    windgust: number;
    cloudcover: number;
    conditions?: string;
    humidity?: number;
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
    const [weather, setWeather] = useState<WeatherValue>({
        datetime: "",
        temp: 0,
        precipitation: 0,
        windspeed: 0,
        windgust: 0,
        cloudcover: 0
    });
    const [values, setValues] = useState<WeatherValue[]>([]);
    const [place, setPlace] = useState<string>('');
    const [thisLocation, setLocation] = useState<string>('');

    useEffect(() => {
        if (!place) return; // Don't fetch if place is empty

        axios.get(`${api.baseURL}weather?q=${place}&units=metric&APPID=${api.key}`)
            .then((response) => {
                setWeather(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [place]);

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