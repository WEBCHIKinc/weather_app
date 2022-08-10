import React from 'react'
import WeatherService from '../API/WeatherService';
import { changeCityNameAction } from '../store/weatherReducer';
import { useSelector } from "react-redux";

const InputBox = ({dispatch}) => {
    const cityName = useSelector(state => state.cityName)

    const getWeather = (e) => {
        e.preventDefault();
        WeatherService.getWeatherByName(cityName)
    }

    const changeCityName = (text) => {
        dispatch(changeCityNameAction(text))
    }

    return (
        <div className="box">
            <form className='base-form'>
                <input
                    placeholder='Название города'
                    className='input-town'
                    value={cityName}
                    onChange={(e) => { changeCityName(e.target.value) }}
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