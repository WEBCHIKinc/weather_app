const initialState = {
  cityName: "",
  weatherData: "",
  weatherForecastData: "",
  isLoading: false,
  isError: false,
  weatherDescription: "",
  weatherCityName: "",
  weatherCityTemp: "",
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
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
}
