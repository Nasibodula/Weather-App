import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context'
import Rainy from '../Assets/images/Rainy.jpg';
import '../App.css'
import Clear from '../Assets/images/clear.jpg';
import Fog from '../Assets/images/fog.jpg';
import Cloudy from '../Assets/images/cloudy.jpg';
import Snow from '../Assets/images/snow.jpg';
import Stormy from '../Assets/images/stormy.jpg';
import Sunny from '../Assets/images/sunny.jpg';

const Background: React.FC = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState<string>(Clear);
  useEffect(() => {
    if (weather.conditions) {
      const imageString = weather.conditions;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes('sunny')) {
        setImage(Sunny);
      }else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weather]);
  return (
    <div>
      <img src={Rainy} className=' pfixed   w100 h100' alt='image'/>
    </div>
  )
}

export default Background;

