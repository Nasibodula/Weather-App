import React from 'react'
import { Background, MiniCard, WeatherCard } from './Components'
import { JsxElement } from 'typescript'

function App(): JSX.Element {
  return (
    <div>
          <div className='container-fluid text-white px-4'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-0'>
        <h1 className='navbar-brand font-weight-bold'>Weather App</h1>
        <div className='d-flex flex-row align-items-center'>
          {/* <img src={search} alt="search" className='mr-2' style={{ width: '24px', height: '24px' }} /> */}
          <input 
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }} 
            type="text" 
            placeholder='Search city' 
            className='form-control' 
            value={input} 
            onChange={e => setInput(e.target.value)} 
          />
        </div>
      </nav>
      <Background/>
      <WeatherCard/>
      <MiniCard/>
    </div>
  )
}

export default App




















// import React, { useState } from 'react';
// import './App.css';
// // import search from './assets/icons/search.svg';
// import { useStateContext } from './Context';
// import { Background, WeatherCard, MiniCard } from './Components';

// function App(): JSX.Element {
//   const [input, setInput] = useState<string>('');
//   const { weather, thisLocation, values, place, setPlace } = useStateContext();

//   const submitCity = (): void => {
//     setPlace(input);
//     setInput('');
//   };

//   return (
    // <div className='container-fluid text-white px-4'>
    //   <nav className='navbar navbar-expand-lg navbar-light bg-light px-0'>
    //     <h1 className='navbar-brand font-weight-bold'>Weather App</h1>
    //     <div className='d-flex flex-row align-items-center'>
    //       {/* <img src={search} alt="search" className='mr-2' style={{ width: '24px', height: '24px' }} /> */}
    //       <input 
    //         onKeyUp={(e) => {
    //           if (e.key === 'Enter') {
    //             submitCity();
    //           }
    //         }} 
    //         type="text" 
    //         placeholder='Search city' 
    //         className='form-control' 
    //         value={input} 
    //         onChange={e => setInput(e.target.value)} 
    //       />
    //     </div>
    //   </nav>
//       <Background/>
//       <main className='row justify-content-center mt-4'>
//         <div className='col-lg-6'>
//           <WeatherCard
//             place={thisLocation}
//             windspeed={weather.wspd}
//             humidity={weather.humidity}
//             temperature={weather.temp}
//             heatIndex={weather.heatindex}
//             iconString={weather.conditions}
//             conditions={weather.conditions}
//           />
//         </div>
//         <div className='col-lg-6'>
//           <div className='row'>
//             {
//               values?.slice(1, 7).map(curr => (
//                 <div key={curr.datetime} className='col-md-4'>
//                   <MiniCard
//                     time={curr.datetime}
//                     temp={curr.temp}
//                     iconString={curr.conditions}
//                   />
//                 </div>
//               ))
//             }
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
