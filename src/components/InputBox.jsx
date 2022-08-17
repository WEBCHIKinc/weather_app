import React from 'react';
import { useSelector } from "react-redux";
import WeatherService from '../API/WeatherService';
import { changeCityNameAction } from '../store/weatherReducer';

const InputBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)

    const handleGetWeatherClick = (e) => {
        e.preventDefault();
        dispatch(WeatherService.getWeatherByName(cityName))
        dispatch(changeCityNameAction(''))
    }

    const handleCityNameChange = (e) => {
        const { value } = e.target;
        dispatch(changeCityNameAction(value));
    }

    return (
        <div className="box">
            <form className='base-form'>
                <input
                    placeholder='Город...'
                    className='input__town'
                    value={cityName}
                    onChange={handleCityNameChange}
                    spellCheck={false}
                />
                <button
                    type="submit"
                    className='button-submit'
                    onClick={handleGetWeatherClick}
                >
                    Ввод
                </button>
            </form>
        </div>
    )
}

export default InputBox