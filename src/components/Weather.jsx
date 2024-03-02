/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Weather = ({weatherData}) => {    
    return (
        <div>
            {weatherData.weather ? (
                <div className='w-[500px] h-[150px] bg-zinc-100 bg-opacity-75 shadow-md rounded-3xl m-auto relative px-6'>
                    <div className='flex justify-between w-full items-end'>
                        <div className='w-1/2 my-4 mx-auto flex justify-between'>
                            <div className='flex flex-col items-start justify-between h-full'>
                                <div>
                                    <p className='text-lg font-semibold'>
                                        {weatherData.name}, {weatherData.sys.country}
                                    </p>
                                    <p className='text-sm'>
                                        {weatherData.weather[0].description}
                                    </p>
                                    <div>
                                        <h1 className='text-6xl mt-3 font-bold'>
                                            {weatherData.main.temp.toFixed()} °C 
                                        </h1>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col justify-between items-end'>
                            <div className='relative'>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-[145px]' />
                            </div>                            
                        </div>
                    </div>
                </div>
            ): null}
        </div>
    );
};

export default Weather;