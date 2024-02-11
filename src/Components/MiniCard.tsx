import React, { useEffect, useState } from 'react';
import Rain from '../Assets/icons/rain.png'

interface Props {

}
const MiniCard: React.FC<Props> = ({}) => {
return (
  <div className='minicard pfixed cfff'>
    <p className='day   dflex jcenter'>Monday</p>
    <hr />
    <div className=''>
      <img src={Rain} alt="forecast not available" className='image2 dflex ' />
    </div>
    <p className='b s20 dflex jcenter'>30.27&deg;C</p>
  </div>
);
};
export default MiniCard;







// import sun from '../assets/icons/sun.png';
// import cloud from '../assets/icons/cloud.png';
// import fog from '../assets/icons/fog.png';
// import rain from '../assets/icons/rain.png';
// import snow from '../assets/icons/snow.png';
// import storm from '../assets/icons/storm.png';
// import wind from '../assets/icons/windy.png';

// interface Props {
//   time: string;
//   temp: number;
//   iconString: string;
// }

// const MiniCard: React.FC<Props> = ({ time, temp, iconString }) => {
//   const [icon, setIcon] = useState<string | undefined>();

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
  // }, [iconString]);

//   return (
//     <div className='glassCard w-32 h-32 p-4 flex flex-col'>
//       <p className='text-center'>
//         {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
//       </p>
//       <hr />
//       <div className='w-full flex justify-center items-center flex-1'>
//         <img src={icon} alt="forecast not available" className='w-16 h-16' />
//       </div>
//       <p className='text-center font-bold'>{temp}&deg;C</p>
//     </div>
//   );
// };

// export default MiniCard;