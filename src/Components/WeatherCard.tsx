import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import Rain from '../Assets/icons/rain.png'


interface Props {
  temperature: number;
  windspeed: number;
  humidity: number;
  place: string;
  heatIndex?: number;
  iconString: string;
  conditions: string;
}

const WeatherCard: React.FC<Props> = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  return (
    <div className='container  pfixed cfff'>
      <div className='mbottom' >
        <img src={Rain} alt='rain_img' className='imagerain h5 w5 '/>
        <span className='fw700 cfff s50'>{temperature} &deg;C</span>
      </div>
      <div className='city  b dflex jcenter s20 mbottom'>
      {place}
      </div>
      <div className='datetime dflex s20 jcenter sbetween mbottom'>
        <p className=''>Date: {new Date().toDateString()}</p>
        <p className=''>Time: 12.00</p>
      </div>
      <div className='dflex sbetween mbottom '>
        <p className=' wdspd b'>Wind Speed <br/><span className=''>{windspeed} km/h</span></p>
        <p className='hmdty b'>Humidity <br/><span className=''>{humidity} gm/m&#179;</span></p>
      </div>
      <div className='heatindex dflex sbetween'>
        <p className=''>Heat Index</p>
        <p className=''>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='s20' />
      <div className='dflex jcenter'>
      {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;







