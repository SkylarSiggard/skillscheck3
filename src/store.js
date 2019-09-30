import { createStore } from 'redux'

const initialState = {
    property: '',
    address: '',
    city: '',
    uState: '',
    zip: '',
    url: '',
    mortgage: '',
    rent: '',
    houses: []
}


//action constants
export const ADD_PROPERTY_TO_LIST = 'ADD_PROPERTY_TO_LIST'
export const ADD_ADDRESS_TO_LIST = 'ADD_ADDRESS_TO_LIST'
export const ADD_CITY_TO_LIST = 'ADD_CITY_TO_LIST'
export const ADD_STATE_TO_LIST = 'ADD_STATE_TO_LIST'
export const ADD_ZIP_TO_LIST = 'ADD_ZIP_TO_LIST'
export const ADD_URL_TO_LIST = 'ADD_URL_TO_LIST'
export const ADD_MORTGAGE_TO_LIST = 'ADD_MORTGAGE_TO_LIST'
export const ADD_RENT_TO_LIST = 'ADD_RENT_TO_LIST'

export const ADD_HOUSE = 'ADD_HOUSE'
export const REMOVE_HOUSE_FROM_LIST = 'REMOVE_HOUSE_FROM_LIST'
export const GET_LIST_OF_HOUSES ='GET_LIST_OF_HOUSES'

//reducer function
function reducer(state = initialState, action) {
    // console.log('this is the initialState', state.houses)
    switch(action.type)  {
        case GET_LIST_OF_HOUSES:
            return {...state, houses: action.payload}
            
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

        case ADD_MORTGAGE_TO_LIST: 
            return {...state, mortgage: action.payload}

        case ADD_RENT_TO_LIST: 
            return {...state, rent: action.payload}

        case REMOVE_HOUSE_FROM_LIST: 
            state.houses.splice(action.payload, 1)
            return {...state}

        case ADD_HOUSE:   
        const {property, address, city, uState, zip, url, morgtage, rent} = state
        const addHouse = {property, address, city, uState, zip, url, morgtage, rent}
        const newHouse = [...state.houses, addHouse]
        return {...state, houses: newHouse}

        default: 
        return state
    }
}

// create store
export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())