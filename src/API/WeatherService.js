import axios from "axios";
import { changeWeatherDataAction } from "../store/weatherReducer";

export default class WeatherService {
    static getWeatherByName(cityName) {
        return async (dispatch) => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`, {
                params: {
                    units: 'metric',
                    lang: 'ru',
                    appid: 'd91a703a0a98bfa02281b20354b6c152'
                }
            })
                .then((resp) => {
                    dispatch(changeWeatherDataAction(resp.data))
                    console.log();
                })
                .catch((err) => {
                    alert('Неверное название города');
                })
        }
    }

    static getWeatherForecastByName(cityName) {
        return async (dispatch) => {
            await axios.get(`api.openweathermap.org/data/2.5/forecast?q=${cityName}`, {
                params: {
                    units: 'metric',
                    lang: 'ru',
                    appid: 'd91a703a0a98bfa02281b20354b6c152'
                }
            })
                .then((resp) => {
                    dispatch(changeWeatherDataAction(resp.data))
                    console.log();
                })
                .catch((err) => {
                    alert('Неверное название города');
                })
        }
    }
}

