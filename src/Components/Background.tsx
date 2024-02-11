import React from 'react'
import Rainy from '../Assets/images/Rainy.jpg';
import '../App.css'

const Background: React.FC = () => {
  return (
    <div>
      <img src={Rainy} className=' pfixed   w100 h100' alt='image'/>
    </div>
  )
}

export default Background;


















// Images
// import Clear from '../assets/images/Clear.jpg';
// import Fog from '../assets/images/fog.png';
// import Cloudy from '../assets/images/Cloudy.jpg';
// import Rainy from '../assets/images/Rainy.jpg';
// import Snow from '../assets/images/snow.jpg';
// import Stormy from '../assets/images/Stormy.jpg';
// import Sunny from '../assets/images/Sunny.jpg';

// const BackgroundLayout: React.FC = () => {
//   const { weather } = useStateContext();
//   const [image, setImage] = useState<string>();

  // useEffect(() => {
  //   if (weather.conditions) {
  //     const imageString = weather.conditions;
  //     if (imageString.toLowerCase().includes('clear')) {
  //       setImage(Clear);
  //     } else if (imageString.toLowerCase().includes('cloud')) {
  //       setImage(Cloudy);
  //     } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
  //       setImage(Rainy);
  //     } else if (imageString.toLowerCase().includes('snow')) {
  //       setImage(Snow);
  //     } else if (imageString.toLowerCase().includes('fog')) {
  //       setImage(Fog);
  //     } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
  //       setImage(Stormy);
  //     }
  //   }
  // }, [weather]);

//   return (
//     <img src={image} alt="weather_image" className='img-fluid position-fixed left-0 top-0 w-100' style={{ zIndex: -10 }} />
//   );
// };

// export default BackgroundLayout;