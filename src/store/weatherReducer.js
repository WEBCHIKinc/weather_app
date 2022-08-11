const defaultState = {
    video: '',
    cityName: '',
    weatherData: '',

}

const CHANGE_VIDEO = 'CHANGE_VIDEO'
const CHANGE_CITY_NAME = 'CHANGE_CITY_NAME'
const CHANGE_WEATHER_DATA = 'CHANGE_WEATHER_DATA'

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_VIDEO':
            return { ...state, video: action.payload }
        case 'CHANGE_CITY_NAME':
            return { ...state, cityName: action.payload }
        case 'CHANGE_WEATHER_DATA':
            return { ...state, weatherData: action.payload }
        default:
            return state
    }
}

export const changeVideoAction = (payload) => ({ type: CHANGE_VIDEO, payload: payload })
export const changeCityNameAction = (payload) => ({ type: CHANGE_CITY_NAME, payload: payload })
export const changeWeatherDataAction = (payload) => ({ type: CHANGE_WEATHER_DATA, payload: payload })