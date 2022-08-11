import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WeatherService from '../API/WeatherService';
import { changeCityNameAction } from '../store/weatherReducer';

const DataBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)
    const weatherData = useSelector(state => state.weatherData)
    const [weatherDescription, setWeatherDescription] = useState('');
    const [weatherCityName, setWeatherCityName] = useState('');

    const getWeather = () => {
        dispatch(WeatherService.getWeatherByName(cityName))
    }

    const changeCityName = (e) => {
        dispatch(changeCityNameAction(e.target.value))
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getWeather()
        }
    }

    useEffect(() => {
        weatherData &&
            setWeatherDescription(weatherData.weather[0].description)
        setWeatherCityName(weatherData.name)
    }, [weatherData])


    return (
        <div className="box">
            <div className="title">
                {weatherData
                    ?
                    <div className='weather-data-header'>
                        <h1>{weatherCityName}</h1>
                        <h2>{weatherDescription}</h2>
                    </div>
                    :
                    <div className='weather-data-header'>
                        <h1>Киев</h1>
                        <h2>Пасмурно</h2>
                    </div>
                }
            </div>

            <div className="weather-info-box">
                <h1 style={{ fontSize: '77px', marginLeft: '20px' }}>
                    22°
                </h1>
            </div>

            <input
                placeholder='Город...'
                className='input-town on-info'
                value={cityName}
                onChange={(e) => { changeCityName(e) }}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default DataBox