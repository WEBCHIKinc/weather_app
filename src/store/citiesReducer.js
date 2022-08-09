import cityData from '../API/cities.json'

const defaultState = {
    cities: cityData
}

const CHANGE_CITIES = 'CHANGE_CITIES'

export const citiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CITIES':
            return { ...state, cities: [action.payload] }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: CHANGE_CITIES, payload: payload })
