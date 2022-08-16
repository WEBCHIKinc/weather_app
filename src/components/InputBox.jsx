import React from 'react';
import { useSelector } from "react-redux";
import WeatherService from '../API/WeatherService';
import { changeCityNameAction } from '../store/weatherReducer';

const InputBox = ({ dispatch }) => {
    const cityName = useSelector(state => state.cityName)

    const getWeather = (e) => {
        e.preventDefault();
        dispatch(WeatherService.getWeatherByName(cityName))
        dispatch(changeCityNameAction(''))
    }

    const changeCityName = (text) => {
        dispatch(changeCityNameAction(text))
    }

    return (
        <div className="box">
            <form className='base-form'>
                <input
                    placeholder='Город...'
                    className='input__town'
                    value={cityName}
                    onChange={(e) => { changeCityName(e.target.value) }}
                    spellCheck={false}
                />
                <button
                    type="submit"
                    className='button-submit'
                    onClick={(e) => getWeather(e)}
                >
                    Ввод
                </button>
            </form>
        </div>
    )
}

export default InputBox