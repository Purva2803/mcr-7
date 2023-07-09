import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import { Country } from './Country'
import { Place } from './Place'


import { Home } from './Home'

function App() {
 

  return (
    <div >
      
        welcome to our Tourirism !!!
       
       <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continents/:continent" element={<Country />} />
          <Route path="*" element={"not found"}/>
          <Route path="/continents/:continent/countries/:country" element={<Place />} />
        

        </Routes>
       </div>
    </div>
  )
}

export default App
