import { OpenweathermapService } from "../../../API/OpenweathermapService";
import { IpService } from "../../../API/IpService";

const CHANGE_CITY_NAME = "CHANGE_CITY_NAME";
const CHANGE_WEATHER_DATA = "CHANGE_WEATHER_DATA";
const CHANGE_WEATHER_FORECAST_DATA = "CHANGE_WEATHER_FORECAST_DATA";
const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";
const WEATHER_DESCRIPTION = "WEATHER_DESCRIPTION";
const WEATHER_CITY_NAME = "WEATHER_CITY_NAME";
const WEATHER_CITY_TEMP = "WEATHER_CITY_TEMP";
const LONDON_WEATHER_DATA = "LONDON_WEATHER_DATA";
const NEW_YORK_WEATHER_DATA = "NEW_YORK_WEATHER_DATA";
const KYIV_WEATHER_DATA = "KYIV_WEATHER_DATA";
const TORONTO_WEATHER_DATA = "TORONTO_WEATHER_DATA";
const IP_WEATHER_DATA = "IP_WEATHER_DATA";

export const WeatherActionCreators = {
  changeCityNameAction: (payload) => ({
    type: CHANGE_CITY_NAME,
    payload,
  }),
  changeWeatherDataAction: (payload) => ({
    type: CHANGE_WEATHER_DATA,
    payload,
  }),
  changeWeatherForecastDataAction: (payload) => ({
    type: CHANGE_WEATHER_FORECAST_DATA,
    payload,
  }),
  changeisLoadingAction: (payload) => ({
    type: IS_LOADING,
    payload,
  }),
  changeIsErrorAction: (payload) => ({
    type: IS_ERROR,
    payload,
  }),
  changeWeatherDescriptionAction: (payload) => ({
    type: WEATHER_DESCRIPTION,
    payload,
  }),
  changeWeatherCityNameAction: (payload) => ({
    type: WEATHER_CITY_NAME,
    payload,
  }),
  changeWeatherCityTempAction: (payload) => ({
    type: WEATHER_CITY_TEMP,
    payload,
  }),
  changeLondonWeatherDataAction: (payload) => ({
    type: LONDON_WEATHER_DATA,
    payload,
  }),
  changeNewYorkWeatherDataAction: (payload) => ({
    type: NEW_YORK_WEATHER_DATA,
    payload,
  }),
  changeKyivWeatherDataAction: (payload) => ({
    type: KYIV_WEATHER_DATA,
    payload,
  }),
  changeTorontoWeatherDataAction: (payload) => ({
    type: TORONTO_WEATHER_DATA,
    payload,
  }),
  changeIpWeatherDataAction: (payload) => ({
    type: IP_WEATHER_DATA,
    payload,
  }),
  getWeather: (cityName) => async (dispatch) => {
    try {
      dispatch(WeatherActionCreators.changeisLoadingAction(true));
      const response = await OpenweathermapService.getWeatherByName(cityName);
      dispatch(WeatherActionCreators.changeWeatherDataAction(response.data));
      dispatch(
        WeatherActionCreators.changeWeatherDescriptionAction(
          response.data.weather[0].description
        )
      );
      dispatch(
        WeatherActionCreators.changeWeatherCityNameAction(response.data.name)
      );
      dispatch(
        WeatherActionCreators.changeWeatherCityTempAction(
          Math.round(response.data.main.temp)
        )
      );
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    } catch (error) {
      console.log(error.message);
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
      dispatch(WeatherActionCreators.setError(true));
    }
  },
  getForecastWeather: (cityName) => async (dispatch) => {
    try {
      dispatch(WeatherActionCreators.changeisLoadingAction(true));
      const response = await OpenweathermapService.getWeatherForecastByName(
        cityName
      );
      dispatch(
        WeatherActionCreators.changeWeatherForecastDataAction(response.data)
      );
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    } catch (error) {
      console.log(error);
      dispatch(WeatherActionCreators.setError(true));
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    }
  },
  changeCityName: (cityName) => async (dispatch) => {
    dispatch(WeatherActionCreators.changeCityNameAction(cityName));
  },
  getMainCitiesWeather: () => async (dispatch) => {
    try {
      dispatch(WeatherActionCreators.changeisLoadingAction(true));
      const response_london = await OpenweathermapService.getWeatherByName(
        "london"
      );
      const response_newYork = await OpenweathermapService.getWeatherByName(
        "new york"
      );
      const response_kyiv = await OpenweathermapService.getWeatherByName(
        "kyiv"
      );
      const response_toronto = await OpenweathermapService.getWeatherByName(
        "toronto"
      );
      const response_ip = await IpService.getWeatherWithIp();
      const response_ipWeater = await OpenweathermapService.getWeatherByName(
        response_ip.data.city
      );
      dispatch(
        WeatherActionCreators.changeLondonWeatherDataAction(
          response_london.data
        )
      );
      dispatch(
        WeatherActionCreators.changeNewYorkWeatherDataAction(
          response_newYork.data
        )
      );
      dispatch(
        WeatherActionCreators.changeKyivWeatherDataAction(response_kyiv.data)
      );
      dispatch(
        WeatherActionCreators.changeTorontoWeatherDataAction(
          response_toronto.data
        )
      );
      dispatch(
        WeatherActionCreators.changeIpWeatherDataAction(response_ipWeater.data)
      );
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    } catch (error) {
      console.log(error.message);
      dispatch(WeatherActionCreators.setError(true));
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    }
  },
  setError: (error) => async (dispatch) => {
    dispatch(WeatherActionCreators.changeIsErrorAction(error));
    setTimeout(() => {
      dispatch(WeatherActionCreators.changeIsErrorAction(false));
    }, 3000);
  },
};
