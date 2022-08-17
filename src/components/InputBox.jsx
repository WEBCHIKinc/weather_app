import React from 'react';
import { useSelector } from "react-redux";
import WeatherService from '../API/WeatherService';
import { changeCityNameAction } from '../store/weatherReducer';
import MyCityInput from './UI/CityInput/MyCityInput';
import MyButton from './UI/Button/MyButton';
import MyForm from './UI/Form/MyForm';
import MyBox from './UI/Box/MyBox';

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