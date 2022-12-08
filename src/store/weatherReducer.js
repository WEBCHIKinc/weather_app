const defaultState = {
  video: "",
  cityName: "",
  weatherData: "",
  weatherForecastData: "",
  isLoading: false,
  isError: false,
  weatherDescription: "",
  weatherCityName: "",
  weatherCityTemp: "",
};

const CHANGE_VIDEO = "CHANGE_VIDEO";
const CHANGE_CITY_NAME = "CHANGE_CITY_NAME";
const CHANGE_WEATHER_DATA = "CHANGE_WEATHER_DATA";
const CHANGE_WEATHER_FORECAST_DATA = "CHANGE_WEATHER_FORECAST_DATA";
const IS_LOADING = "IS_LOADING";
const IS_ERROR = "IS_ERROR";
const WEATHER_DESCRIPTION = "WEATHER_DESCRIPTION";
const WEATHER_CITY_NAME = "WEATHER_CITY_NAME";
const WEATHER_CITY_TEMP = "WEATHER_CITY_TEMP";

export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_VIDEO":
      return { ...state, video: action.payload };
    case "CHANGE_CITY_NAME":
      return { ...state, cityName: action.payload };
    case "CHANGE_WEATHER_DATA":
      return { ...state, weatherData: action.payload };
    case "CHANGE_WEATHER_FORECAST_DATA":
      return { ...state, weatherForecastData: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "IS_ERROR":
      return { ...state, isError: action.payload };
    case "WEATHER_DESCRIPTION":
      return { ...state, weatherDescription: action.payload };
    case "WEATHER_CITY_NAME":
      return { ...state, weatherCityName: action.payload };
    case "WEATHER_CITY_TEMP":
      return { ...state, weatherCityTemp: action.payload };
    default:
      return state;
  }
};

export const changeVideoAction = (payload) => ({
  type: CHANGE_VIDEO,
  payload: payload,
});
export const changeCityNameAction = (payload) => ({
  type: CHANGE_CITY_NAME,
  payload: payload,
});
export const changeWeatherDataAction = (payload) => ({
  type: CHANGE_WEATHER_DATA,
  payload: payload,
});
export const changeWeatherForecastDataAction = (payload) => ({
  type: CHANGE_WEATHER_FORECAST_DATA,
  payload: payload,
});
export const changeisLoadingAction = (payload) => ({
  type: IS_LOADING,
  payload: payload,
});
export const changeIsErrorAction = (payload) => ({
  type: IS_ERROR,
  payload: payload,
});
export const changeWeatherDescriptionAction = (payload) => ({
  type: WEATHER_DESCRIPTION,
  payload: payload,
});
export const changeWeatherCityNameAction = (payload) => ({
  type: WEATHER_CITY_NAME,
  payload: payload,
});
export const changeWeatherCityTempAction = (payload) => ({
  type: WEATHER_CITY_TEMP,
  payload: payload,
});
