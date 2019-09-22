import { createStore } from 'redux'
import axios from 'axios'

//initial state
const initialState = {
    houses: [],
    property: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    url: '',
    morgtage: '',
    rent: ''
}

// const listHouses = axios.get('/api/house')

//action constants
export const ADD_HOUSE_TO_LIST = 'ADD_HOUSE_TO_LIST'
export const REMOVE_HOUSE_FROM_LIST = 'REMOVE_HOUSE_FROM_LIST'
export const GET_LIST_OF_HOUSES ='GET_LIST_OF_HOUSES'

//reducer function
async function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_LIST_OF_HOUSES:
            let listOfHouses = await axios.get('/api/house')
            return Object.assign({} , state, {houses: listOfHouses})
            
        case REMOVE_HOUSE_FROM_LIST: 
            let updatedList = [...state.houses]
            updatedList.splice(action.payload, 1)
            return Object.assign({} , state , {houses: updatedList})
        case ADD_HOUSE_TO_LIST: 
            let newHouse = [...state.houses, action.payload]
            return Object.assign({} , state, {houses: newHouse})
        default: 
        return state
    }
}

// create store
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )