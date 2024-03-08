import React, { useEffect, useState } from 'react';
import sun from '../Assets/icons/sun.png';
import cloud from '../Assets/icons/cloud.png';
import fog from '../Assets/icons/fog.png';
import rain from '../Assets/icons/rain.png';
import snow from '../Assets/icons/snow.png';
import storm from '../Assets/icons/storm.png';
import wind from '../Assets/icons/wind.png';

interface Props {
  time: string;
  temp: number;
  iconString: string;
}

const MiniCard: React.FC<Props> = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState<string | undefined>();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind);
      }
    }
  }, [iconString]);

return (
  <div className='minicard pfixed cfff'>
    <p className='day dflex jcenter'> {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}</p>
    <hr />
    <div className=''>
      <img src={icon} alt="forecast not available" className='image2 dflex ' />
    </div>
    <p className='b s20 dflex jcenter'>{temp}&deg;C</p>
  </div>
);
};
export default MiniCard;

