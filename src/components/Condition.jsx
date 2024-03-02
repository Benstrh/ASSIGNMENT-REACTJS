/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Condition = ({weatherData}) => {
    return (
        <div>
            {weatherData.name !== undefined ? (
                    <div className='m-auto w-[500px] h-auto bg-zinc-100 bg-opacity-75 shadow-md rounded-3xl relative px-6 py-3 my-2 mx-auto text-sm'>
                        <div className='m-auto flex justify-between items-center'>                            
                            <div>
                                <img src="src\assets\img\mood_FILL0_wght400_GRAD0_opsz24.svg" alt="" className='w-[20px]'/>
                                <p>Feels Like</p>
                                <p className='font-semibold'>{weatherData.main.feels_like.toFixed()} °C</p>                                
                            </div>                            
                            <div>
                                <img src="src\assets\img\humidity_low_FILL0_wght400_GRAD0_opsz24.svg" alt="" className='w-[20px]'/>
                                <p>Humidity</p>
                                <p className='font-semibold'>{weatherData.main.humidity} %</p>                                
                            </div>                     
                                <div>
                                <img src="src\assets\img\air_FILL0_wght400_GRAD0_opsz24.svg" alt="" className='w-[20px]'/>
                                <p>Wind Speed</p>
                                <p className='font-semibold'>{weatherData.wind.speed.toFixed()} KPH</p>                                
                            </div>                            
                            <div>
                                <img src="src\assets\img\compare_arrows_FILL0_wght400_GRAD0_opsz24.svg" alt="" className='w-[20px]'/>  
                                <p>Pressure</p>
                                <p className='font-semibold'>{weatherData.main.pressure} hPa</p>                                
                            </div>                             
                        </div>
                    </div>
            ): null}
        </div>
        
    );
};

export default Condition;