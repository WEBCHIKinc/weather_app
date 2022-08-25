import React from 'react';
import { useSelector } from "react-redux";
import WeatherService from '../API/WeatherService';
import { changeCityNameAction, changeisLoadingAction } from '../store/weatherReducer';
import MyCityInput from './UI/CityInput/MyCityInput';
import MyButton from './UI/Button/MyButton';
import MyForm from './UI/Form/MyForm';
import MyBox from './UI/Box/MyBox';
import MyLoader from './UI/Loader/MyLoader';

const InputBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)
    const isLoading = useSelector(state => state.isLoading)

    const changeCityName = (value) => dispatch(changeCityNameAction(value))
    const getWeather = () => { dispatch(WeatherService.getWeatherByName(cityName)) }
    const getForecastWeather = () => { dispatch(WeatherService.getWeatherForecastByName(cityName)) }
    const changeLoading = (boolean) => dispatch(changeisLoadingAction(boolean))

    const handleGetWeatherClick = (e) => {
        e.preventDefault();
        changeLoading(true)
        getWeather()
        getForecastWeather()
        changeCityName('')
    }

    const handleCityNameChange = (e) => {
        const { value } = e.target;
        changeCityName(value)
    }

    if (isLoading) {
        return (
            <MyLoader />
        )
    }

    return (
        <MyBox>
            <MyForm>
                <MyCityInput
                    placeholder='Город...'
                    className='input__town'
                    value={cityName}
                    onChange={handleCityNameChange}
                    spellCheck={false}
                />
                <MyButton
                    type="submit"
                    onClick={handleGetWeatherClick}
                >
                    Ввод
                </MyButton>
            </MyForm>
        </MyBox>
    )
}

export default InputBox