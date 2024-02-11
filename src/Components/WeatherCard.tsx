import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import Rain from '../Assets/icons/rain.png'
// import { Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


interface Props{

}

const WeatherCard: React.FC<Props> = ({}) => {
  return (
    <div className='container  pfixed cfff'>
      <div className='mbottom' >
        <img src={Rain} alt='rain_img' className='imagerain h5 w5 '/>
        <span className='fw700 cfff s50'>32.27 &deg; C</span>
      </div>
      <div className='city  b dflex jcenter s20 mbottom'>
        Nairobi, Kenya, Africa
      </div>
      <div className='datetime dflex s20 jcenter sbetween mbottom'>
        <p className=''>12.8.2023</p>
        <p className=''>12.00pm</p>
      </div>
      <div className='dflex sbetween mbottom '>
        <p className=' wdspd b'>Wind Speed <br/><span className=''>120 km/h</span></p>
        <p className='hmdty b'>Humidity <br/><span className=''>100 gm/m&#179;</span></p>
      </div>
      <div className='heatindex dflex sbetween'>
        <p className=''>Heat Index</p>
        <p className=''>120</p>
      </div>
      <hr className='s20' />
      <div className='dflex jcenter'>
        Rainy
      </div>
    </div>
  );
};

export default WeatherCard;

// className='w-75 min-w-22rem h-100 glassCard p-4'

// import sun from '../assets/icons/sun.png';
// import cloud from '../assets/icons/cloud.png';
// import fog from '../assets/icons/fog.png';
// import rain from '../assets/icons/rain.png';
// import snow from '../assets/icons/snow.png';
// import storm from '../assets/icons/storm.png';
// import wind from '../assets/icons/windy.png';

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
//   const [icon, setIcon] = useState<string>();
//   const { time } = useDate();

  // useEffect(() => {
  //   if (iconString) {
  //     if (iconString.toLowerCase().includes('cloud')) {
  //       setIcon(cloud);
  //     } else if (iconString.toLowerCase().includes('rain')) {
  //       setIcon(rain);
  //     } else if (iconString.toLowerCase().includes('clear')) {
  //       setIcon(sun);
  //     } else if (iconString.toLowerCase().includes('thunder')) {
  //       setIcon(storm);
  //     } else if (iconString.toLowerCase().includes('fog')) {
  //       setIcon(fog);
  //     } else if (iconString.toLowerCase().includes('snow')) {
  //       setIcon(snow);
  //     } else if (iconString.toLowerCase().includes('wind')) {
  //       setIcon(wind);
  //     }
  //   }
  //</string>}, [iconString]);

//   return (
//     <div className='card w-75 min-w-22rem h-100 glassCard p-4'>
//       <div className='d-flex w-100 justify-content-center align-items-center gap-4 mt-12 mb-4'>
//         <img src={icon} alt="weather_icon" />
//         <p className='font-weight-bold text-5xl d-flex justify-content-center align-items-center'>{temperature} &deg;C</p>
//       </div>
      // <div className='font-weight-bold text-center text-xl'>
      //   {place}
      // </div>
      // <div className='w-100 d-flex justify-content-between align-items-center mt-4'>
      //   <p className='flex-1 text-center p-2'>Date: {new Date().toDateString()}</p>
      //   <p className='flex-1 text-center p-2'>Time: {time}</p>
      // </div>
      // <div className='w-100 d-flex justify-content-between align-items-center mt-4 gap-4'>
      //   <p className='flex-1 text-center p-2 font-weight-bold bg-primary shadow rounded-lg'>Wind Speed <span className='font-normal'>{windspeed} km/h</span></p>
      //   <p className='flex-1 text-center p-2 font-weight-bold rounded-lg bg-success'>Humidity <span className='font-normal'>{humidity} gm/m&#179;</span></p>
      // </div>
      // <div className='w-100 p-3 mt-4 d-flex justify-content-between align-items-center'>
      //   <p className='font-weight-semibold text-lg'>Heat Index</p>
      //   <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      // </div>
      // <hr className='bg-slate-600' />
      // <div className='w-100 p-4 d-flex justify-content-center align-items-center text-3xl font-weight-semibold'>
      //   {conditions}
      // </div>
//     </div>
//   );
// };

// export default WeatherCard;






