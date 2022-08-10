const defaultState = {
    video: '',
    cityName: '',

}

const CHANGE_VIDEO = 'CHANGE_VIDEO'
const CHANGE_CITY_NAME = 'CHANGE_CITY_NAME'

export const weatherReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_VIDEO':
            return { ...state, video: action.payload }
        case 'CHANGE_CITY_NAME':
            return { ...state, cityName: action.payload }
        default:
            return state
    }
}

export const changeVideoAction = (payload) => ({ type: CHANGE_VIDEO, payload: payload })
export const changeCityNameAction = (payload) => ({ type: CHANGE_CITY_NAME, payload: payload })