import { createStore } from 'redux'

const initialState = {
    property: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    url: '',
    morgtage: '',
    rent: '',
    houses: [{
        property: 'skylars house',
        address: '123 street',
        city: 'sandy',
        state: 'UT',
        zip: 84032,
        url: '',
        morgtage: 666,
        rent: 12
    }]
}
//action constants
export const ADD_PROPERTY_TO_LIST = 'ADD_PROPERTY_TO_LIST'
export const ADD_ADDRESS_TO_LIST = 'ADD_ADDRESS_TO_LIST'
export const ADD_CITY_TO_LIST = 'ADD_CITY_TO_LIST'
export const ADD_STATE_TO_LIST = 'ADD_STATE_TO_LIST'
export const ADD_ZIP_TO_LIST = 'ADD_ZIP_TO_LIST'
export const ADD_URL_TO_LIST = 'ADD_URL_TO_LIST'
export const ADD_MORGTAGE_TO_LIST = 'ADD_MORGTAGE_TO_LIST'
export const ADD_RENT_TO_LIST = 'ADD_RENT_TO_LIST'

export const ADD_HOUSE = 'ADD_HOUSE'
export const REMOVE_HOUSE_FROM_LIST = 'REMOVE_HOUSE_FROM_LIST'
export const GET_LIST_OF_HOUSES ='GET_LIST_OF_HOUSES'

//reducer function
async function reducer(state = initialState, action) {
    // console.log('this is the initialState', state)
    switch(action.type) {
        case GET_LIST_OF_HOUSES:
            return state.houses = action.payload
            // let listHouses = {houses: action.payload}
            // console.log('a list bro', action.payload)
            // initialState.houses = listHouses
            // break;
        case ADD_PROPERTY_TO_LIST:
            return {...state, property: action.payload}

        case ADD_ADDRESS_TO_LIST: 
            return {...state, address: action.payload}

        case ADD_CITY_TO_LIST:
            return {...state, city: action.payload}

        case ADD_STATE_TO_LIST:
            return {...state, state: action.payload}

        case ADD_ZIP_TO_LIST: 
            return {...state, zip: action.payload}

        case ADD_URL_TO_LIST: 
            return {...state, url: action.payload}

        case ADD_MORGTAGE_TO_LIST: 
            return {...state, morgtage: action.payload}

        case ADD_RENT_TO_LIST: 
            return {...state, rent: action.payload}

        case REMOVE_HOUSE_FROM_LIST: 
            let updateList = [...state.houses]
            updateList.splice(action.payload, 1)
            return Object.assign({}, state, {houses: updateList})

            // case ADD_HOUSE: 
            //     const {property, address, city, state, zip, url, morgtage, rent} = state
            //     const house = {property, address, city, state, zip, url, morgtage, rent}
            //     const newHouse = [...state.houses, house]
            //     return {...state, houses: newHouse}

        default: 
        // console.log('end is hit', state)
        return state
    }
}

// create store
export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )