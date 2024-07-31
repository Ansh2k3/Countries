import React from 'react'
import "./App.css" ;
import {Routes,Route} from 'react-router-dom'
import ALLCountries from './components/ALLCountries/ALLCountries';
import CountryInfo from './components/CountryInfo/CountryInfo';

function App() {
  return (
    <>
    <div className="w-full h-[70px] leading-[70px] fixed top-0 left-0  bg-[#2b3945]	">
      <div className=' w-[1140px] px-0 py-4 mx-auto ' >
      <h5 className="flex items-center text-xl text-white">
        Where in the world
      </h5>
      </div>
       </div>
     <div className="w-full h-[70px] leading-[70px] fixed top-0 left-0  bg-[#2b3945]	">
      <Routes>
        <Route path='/' element={<ALLCountries />} /> 
        <Route path='/country/:countryName' element={<CountryInfo />} />
      </Routes>
     </div>
     </>
    )
}

export default App
