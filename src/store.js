import { createStore } from 'redux'
import axios from 'axios'

//initial state
const initialState = {
    houses:[]
}

// const listHouses = axios.get('/api/house')

//action constants
export const ADD_HOUSE_TO_LIST = 'ADD_HOUSE_TO_LIST'
export const REMOVE_HOUSE_FROM_LIST = 'REMOVE_HOUSE_FROM_LIST'

//reducer function
function reducer(state = initialState, action) {
    switch(action.type) {
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