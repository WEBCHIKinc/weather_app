import React, { useEffect } from 'react';
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
    const weatherDescription = useSelector(state => state.weatherDescription)
    const weatherCityName = useSelector(state => state.weatherCityName)
    const weatherCityTemp = useSelector(state => state.weatherCityTemp)
    const rRain = new RegExp('дождь', 'i')

    const getWeather = () => { dispatch(WeatherService.getWeatherByName(cityName)) }
    const changeVideo = (video) => { dispatch(changeVideoAction(video)) }

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
        if (rRain.test(weatherDescription)) {
            changeVideo(rain)
        } else {
            changeVideo(sunny)
        }
    }, [weatherDescription])

    if (isLoading) {
        return (
            <MyLoader />
        )
    }

    return (
        <MyBox>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: '7%'
            }}>
                {weatherData
                    &&
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
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
        </MyBox >
    )
}

export default DataBox