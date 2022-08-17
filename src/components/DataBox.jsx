import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WeatherService from '../API/WeatherService';
import { changeCityNameAction, changeVideoAction } from '../store/weatherReducer';
import rain from '../videos/rain_seamless_loop.mp4';
import sunny from '../videos/sky_seamless_loop.mp4';
import MyCityInput from './UI/CityInput/MyCityInput';
import MyBox from './UI/Box/MyBox';


const DataBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)
    const weatherData = useSelector(state => state.weatherData)
    const [weatherDescription, setWeatherDescription] = useState('');
    const [weatherCityName, setWeatherCityName] = useState('');
    const [weatherCityTemp, setWeatherCityTemp] = useState('');

    const getWeather = () => {
        dispatch(WeatherService.getWeatherByName(cityName))
    }

    const handleCityNameChange = (e) => {
        const { value } = e.target;
        dispatch(changeCityNameAction(value));
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getWeather()
            dispatch(changeCityNameAction(''))
        }
    }

    useEffect(() => {
        setWeatherDescription(weatherData.weather[0].description)
        setWeatherCityName(weatherData.name)
        setWeatherCityTemp(weatherData.main.temp)

        switch (weatherData.weather[0].description) {
            case 'дождь':
                dispatch(changeVideoAction(rain))
                break;
            case 'небольшой дождь':
                dispatch(changeVideoAction(rain))
                break;
            case 'ясно':
                dispatch(changeVideoAction(sunny))
                break;
            case 'облачно':
                dispatch(changeVideoAction(sunny))
                break;
            default:
                dispatch(changeVideoAction(sunny))
                break;
        }
    }, [weatherData])

    return (
        <MyBox>
            <div className="title">
                {weatherData
                    &&
                    <div className='weather-data-header'>
                        <h1 style={{ fontSize: 50 }}>{weatherCityName}</h1>
                        <h2>{weatherDescription}</h2>
                    </div>
                }
            </div>

            <div className="weather-info-box">
                <h1 style={{ fontSize: '77px', marginLeft: '20px' }}>
                    {`${weatherCityTemp}°`}
                </h1>
            </div>

            <MyCityInput
                infoPage={true}
                placeholder='Город...'
                value={cityName}
                onChange={handleCityNameChange}
                onKeyDown={handleKeyDown}
                spellCheck='false'
            />
        </MyBox>
    )
}

export default DataBox