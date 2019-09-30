import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_MORTGAGE_TO_LIST, ADD_RENT_TO_LIST, ADD_HOUSE} from './../store'
import axios from 'axios'

export default class List extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.setState({
            property: reduxState.property,
            address: reduxState.address,
            city: reduxState.city,
            uState: reduxState.uState,
            zip: reduxState.zip,
            url: reduxState.url,
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
            type: ADD_MORTGAGE_TO_LIST,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: ADD_RENT_TO_LIST,
            payload: this.state.rent
        })
        store.dispatch({
            type: ADD_HOUSE
        })
        const reduxState = store.getState()
        console.log('before')
        axios.post('/api/house', {property: reduxState.property, address: reduxState.address, city: reduxState.city, uState: reduxState.uState, zip: reduxState.zip, url: reduxState.url, mortgage: reduxState.mortgage, rent: reduxState.rent }).then(res => {
            console.log('.then' )
            this.setState({
            property: '',
            address: '',
            city: '',
            uState: '',
            zip: '',
            url: '',
            mortgage: '',
            rent: ''
    })
    console.log('after')
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
                Recommended Rent ${this.mortgage}  
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