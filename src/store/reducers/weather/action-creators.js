import WeatherService from "../../../API/WeatherService";

const CHANGE_CITY_NAME = "CHANGE_CITY_NAME";
const CHANGE_WEATHER_DATA = "CHANGE_WEATHER_DATA";
const CHANGE_WEATHER_FORECAST_DATA = "CHANGE_WEATHER_FORECAST_DATA";
const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";
const WEATHER_DESCRIPTION = "WEATHER_DESCRIPTION";
const WEATHER_CITY_NAME = "WEATHER_CITY_NAME";
const WEATHER_CITY_TEMP = "WEATHER_CITY_TEMP";

export const WeatherActionCreators = {
  changeCityNameAction: (payload) => ({
    type: CHANGE_CITY_NAME,
    payload: payload,
  }),
  changeWeatherDataAction: (payload) => ({
    type: CHANGE_WEATHER_DATA,
    payload: payload,
  }),
  changeWeatherForecastDataAction: (payload) => ({
    type: CHANGE_WEATHER_FORECAST_DATA,
    payload: payload,
  }),
  changeisLoadingAction: (payload) => ({
    type: IS_LOADING,
    payload: payload,
  }),
  changeIsErrorAction: (payload) => ({
    type: IS_ERROR,
    payload: payload,
  }),
  changeWeatherDescriptionAction: (payload) => ({
    type: WEATHER_DESCRIPTION,
    payload: payload,
  }),
  changeWeatherCityNameAction: (payload) => ({
    type: WEATHER_CITY_NAME,
    payload: payload,
  }),
  changeWeatherCityTempAction: (payload) => ({
    type: WEATHER_CITY_TEMP,
    payload: payload,
  }),
  getWeather: (cityName) => async (dispatch) => {
    try {
      dispatch(WeatherActionCreators.changeisLoadingAction(true));
      const response = await WeatherService.getWeatherByName(cityName);
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
      console.log(error);
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
      dispatch(WeatherActionCreators.changeIsErrorAction(true));
      setTimeout(() => {
        dispatch(WeatherActionCreators.changeIsErrorAction(false));
      }, 3000);
    }
  },
  getForecastWeather: (cityName) => async (dispatch) => {
    try {
      const response = await WeatherService.getWeatherForecastByName(cityName);
      dispatch(
        WeatherActionCreators.changeWeatherForecastDataAction(response.data)
      );
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    } catch (error) {
      console.log(error);
      dispatch(WeatherActionCreators.changeisLoadingAction(false));
    }
  },
  changeCityName: (cityName) => async (dispatch) => {
    dispatch(WeatherActionCreators.changeCityNameAction(cityName));
  },
};
