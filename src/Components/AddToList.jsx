import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_MORGTAGE_TO_LIST, ADD_RENT_TO_LIST, ADD_HOUSE} from './../store'

export default class List extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.setState({
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        })
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    create() {
        store.dispatch({
            type: ADD_MORGTAGE_TO_LIST,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: ADD_RENT_TO_LIST,
            payload: this.state.rent
        })
        store.dispatch({
            type: ADD_HOUSE
        })
    }
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>Add New Listing</div>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div className='rent'>
                Recommended Rent $0
                </div>
                <div className='inputs'>
                    Mounthly Mortgage Amount 
                    <input onChange={(e) => this.handleChange(e, 'mortgage')} type="text"/>
                </div>
                <div className='inputs'>
                    Desired Mounthly Rent
                    <input onChange={(e) => this.handleChange(e, 'rent')} type="text"/>
                </div>
                <div className='next1'>
                    <Link to='/addurl'><button>Prevous Step</button></Link>
                    <Link to='/'><button onClick={() => this.create()}>Complete</button></Link>
                </div>
            </div>
        )
    }
}