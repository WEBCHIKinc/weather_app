import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import WeatherService from '../API/WeatherService';
import { changeCityNameAction, changeisLoadingAction, changeVideoAction } from '../store/weatherReducer';
import rain from '../videos/rain_seamless_loop.mp4';
import sunny from '../videos/sky_seamless_loop.mp4';
import MyCurrentWeatherBox from './UI/Box/CurrentWeatherBox/MyCurrentWeatherBox';
import MyBox from './UI/Box/MyBox';
import MyButton from './UI/Button/MyButton';
import MyCityInput from './UI/CityInput/MyCityInput';
import MyLoader from './UI/Loader/MyLoader';


const DataBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)
    const weatherData = useSelector(state => state.weatherData)
    const isLoading = useSelector(state => state.isLoading)
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
            dispatch(changeisLoadingAction(true))
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
            default:
                dispatch(changeVideoAction(sunny))
                break;
        }
    }, [weatherData])

    if (isLoading) {
        return (
            <MyLoader />
        )
    }

    return (
        <MyBox>
            <div className="title">
                {weatherData
                    &&
                    <div className='weather-data-header'>
                        <h1 style={{ fontSize: 50 }}>{weatherCityName}</h1>

                    </div>
                }
            </div>

            <MyCurrentWeatherBox
                weatherCityTemp={weatherCityTemp}
                weatherDescription={weatherDescription}
            />

            <MyCityInput
                infoPage={true}
                placeholder='Город...'
                value={cityName}
                onChange={handleCityNameChange}
                onKeyDown={handleKeyDown}
                spellCheck='false'
            />

            <MyButton
                infoPage={true}
            >
                нед.
            </MyButton>

            <MyButton
                infoPage={true}
                current={true}
            >
                сейчас
            </MyButton>
        </MyBox>
    )
}

export default DataBox