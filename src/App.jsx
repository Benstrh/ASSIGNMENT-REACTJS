import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Condition from './components/Condition'


function App() {


  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const API_KEY ='34ea49ff9e47d32e857f397f78e4abeb'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className='m-auto p-44 w-full min-h-svh relative font-primary bg-cover bg-imagesBg'>
      <div className='m-auto w-[500px] py-4 pl-0 pr-0 relative flex justify-between items-end'>
        <input type='text' className='mt-10 relative text-center text-slate-600 py-3 px-6 w-4/6 text-lg rounded-3xl border-none border-gray-200 focus:outline-none bg-zinc-100 bg-opacity-75 shadow-md' placeholder='Enter Location' 
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}        
        />
        <div className='flex flex-col text-center'>
          <h1 className='text-xl font-bold text-white'>Weather Apps</h1>
          <h3 className='relative text-white font-light'>Set your location!</h3>
        </div>   

        
      </div>

      <Weather weatherData = {data}/> 
      <Condition weatherData = {data}/> 

    </div>
  )
}

export default App
