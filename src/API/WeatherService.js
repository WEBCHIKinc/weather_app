import axios from "axios";
import { changeIsErrorAction, changeisLoadingAction, changeWeatherCityNameAction, changeWeatherCityTempAction, changeWeatherDataAction, changeWeatherDescriptionAction, changeWeatherForecastDataAction } from "../store/weatherReducer";

export default class WeatherService {
    static getWeatherByName(cityName) {
        return async (dispatch) => {
            try {
                const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`, {
                    params: {
                        units: 'metric',
                        lang: 'ru',
                        appid: 'd91a703a0a98bfa02281b20354b6c152'
                    }
                });
                dispatch(changeWeatherDataAction(resp.data));
                dispatch(changeWeatherDescriptionAction((resp.data.weather[0].description)));
                dispatch(changeWeatherCityNameAction((resp.data.name)));
                dispatch(changeWeatherCityTempAction((Math.round(resp.data.main.temp))));

            }
            catch {
                console.log('Неверное название города');
                dispatch(changeisLoadingAction(false));
                dispatch(changeIsErrorAction(true))
                setTimeout(() => {
                    dispatch(changeIsErrorAction(false))
                }, 3000)
            }
        }
    }

    static getWeatherForecastByName(cityName) {
        return async (dispatch) => {
            try {
                const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}`, {
                    params: {
                        units: 'metric',
                        lang: 'ru',
                        appid: 'd91a703a0a98bfa02281b20354b6c152'
                    }
                })
                dispatch(changeWeatherForecastDataAction(resp.data))
                dispatch(changeisLoadingAction(false))
            } catch {
                console.log('Неверное название города');
                dispatch(changeisLoadingAction(false))
            }
        }
    }
}

