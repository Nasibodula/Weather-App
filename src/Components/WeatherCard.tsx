import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import sun from '../Assets/icons/sun.png';
import cloud from '../Assets/icons/cloud.png';
import fog from '../Assets/icons/fog.png';
import rain from '../Assets/icons/rain.png';
import snow from '../Assets/icons/snow.png';
import storm from '../Assets/icons/storm.png';
import wind from '../Assets/icons/wind.png';


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
  const [icon, seticon] = useState<string>('');
  const [time, settime] = useState<Date>(new Date());
  const { date, time: currentTime } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        seticon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        seticon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        seticon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        seticon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        seticon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        seticon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        seticon(wind)
      }
    }
  }, [iconString]);

  return (
    <div className='container  pfixed cfff'>
      <div className='mbottom' >
        <img src={icon} alt='weather_icon' className='imagerain h5 w5 '/>
        <span className='fw700 cfff s50'>{temperature} &deg;C</span>
      </div>
      <div className='city  b dflex jcenter s20 mbottom'>
      {place}
      </div>
      <div className='datetime dflex s20 jcenter sbetween mbottom'>
        <p className=''>Date: {new Date().toDateString()}</p>
        <p className=''>Time: {time.toLocaleTimeString()}</p>
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

// import React, { useEffect, useState } from 'react';
// import sun from '../Assets/icons/sun.png';
// import cloud from '../Assets/icons/cloud.png';
// import fog from '../Assets/icons/fog.png';
// import rain from '../Assets/icons/rain.png';
// import snow from '../Assets/icons/snow.png';
// import storm from '../Assets/icons/storm.png';
// import wind from '../Assets/icons/wind.png';

// interface Props {
//   temperature: number;
//   windspeed: number;
//   humidity: number;
//   place: string;
//   heatIndex?: number;
//   iconString: string;
//   conditions: string;
// }

// const WeatherCard: React.FC<Props> = ({
//   temperature,
//   windspeed,
//   humidity,
//   place,
//   heatIndex,
//   iconString,
//   conditions,
// }) => {
//   const [icon, setIcon] = useState<string>('');

//   useEffect(() => {
//     if (iconString) {
//       if (iconString.toLowerCase().includes('cloud')) {
//         setIcon(cloud);
//       } else if (iconString.toLowerCase().includes('rain')) {
//         setIcon(rain);
//       } else if (iconString.toLowerCase().includes('clear')) {
//         setIcon(sun);
//       } else if (iconString.toLowerCase().includes('thunder')) {
//         setIcon(storm);
//       } else if (iconString.toLowerCase().includes('fog')) {
//         setIcon(fog);
//       } else if (iconString.toLowerCase().includes('snow')) {
//         setIcon(snow);
//       } else if (iconString.toLowerCase().includes('wind')) {
//         setIcon(wind);
//       }
//     }
//   }, [iconString]);

//   return (
//     <div className='container  pfixed cfff'>
//       <div className='mbottom'>
//         <img src={icon} alt='weather_icon' className='imagerain h5 w5' />
//         <span className='fw700 cfff s50'>{temperature} &deg;C</span>
//       </div>
//       <div className='city  b dflex jcenter s20 mbottom'>
//         {place}
//       </div>
//       <div className='datetime dflex s20 jcenter sbetween mbottom'>
//         <p className=''>Date: {new Date().toDateString()}</p>
//         <p className=''>Time: {new Date().toLocaleTimeString()}</p>
//       </div>
//       <div className='dflex sbetween mbottom'>
//         <p className=' wdspd b'>Wind Speed <br /><span className=''>{windspeed} km/h</span></p>
//         <p className='hmdty b'>Humidity <br /><span className=''>{humidity} gm/m&#179;</span></p>
//       </div>
//       <div className='heatindex dflex sbetween'>
//         <p className=''>Heat Index</p>
//         <p className=''>{heatIndex ? heatIndex : 'N/A'}</p>
//       </div>
//       <hr className='s20' />
//       <div className='dflex jcenter'>
//         {conditions}
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
