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
    houses: []
}
//action constants
export const GET_LIST_OF_HOUSES ='GET_LIST_OF_HOUSES'
export const ADD_PROPERTY_TO_LIST = 'ADD_PROPERTY_TO_LIST'
export const ADD_ADDRESS_TO_LIST = 'ADD_ADDRESS_TO_LIST'
export const ADD_CITY_TO_LIST = 'ADD_CITY_TO_LIST'
export const ADD_STATE_TO_LIST = 'ADD_STATE_TO_LIST'
export const ADD_ZIP_TO_LIST = 'ADD_ZIP_TO_LIST'
export const ADD_URL_TO_LIST = 'ADD_URL_TO_LIST'
export const ADD_MORGTAGE_TO_LIST = 'ADD_MORGTAGE_TO_LIST'
export const ADD_RENT_TO_LIST = 'ADD_RENT_TO_LIST'

export const REMOVE_HOUSE_FROM_LIST = 'REMOVE_HOUSE_FROM_LIST'

//reducer function
async function reducer(state = initialState, action) {
    // console.log('this is the initialState', state)
    switch(action.type) {
        case GET_LIST_OF_HOUSES:
            let listHouses = {houses: action.payload}
            console.log('a list bro', action.payload)
            initialState.houses = listHouses
            break;
        default: 
        console.log('end is hit', state)
        return state
    }
}

// create store
export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )