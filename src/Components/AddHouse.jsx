import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_PROPERTY_TO_LIST, ADD_ADDRESS_TO_LIST, ADD_CITY_TO_LIST, ADD_STATE_TO_LIST, ADD_ZIP_TO_LIST} from './../store'

export default class House extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        console.log('addprop',reduxState.property)
        console.log('addHouse',reduxState.address)
        console.log('addcity',reduxState.city)
        console.log('addstate',reduxState.uState)
        console.log('addzip',reduxState.zip)
        this.state = {
            // property: '',
            // address: '',
            // city: '',
            // state: '',
            // zip: ''            
            property: reduxState.property,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.uState,
            zip: reduxState.zip
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    saveChanges() {
        store.dispatch({
            type: ADD_PROPERTY_TO_LIST,
            payload: this.state.property
        })
        store.dispatch({
            type: ADD_ADDRESS_TO_LIST,
            payload: this.state.address
        })
        store.dispatch({
            type: ADD_CITY_TO_LIST,
            payload: this.state.city
        })
        store.dispatch({
            type: ADD_STATE_TO_LIST,
            payload: this.state.uState
        })
        store.dispatch({
            type: ADD_ZIP_TO_LIST,
            payload: this.state.zip
        })
    }
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>Add New Listing</div>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div className='inputs1'>
                        Property Name 
                    <div className='inputs'>
                        <input onChange={(e) => this.handleChange(e, 'property')} type="text"/>
                    </div>
                        Address 
                    <div className='inputs'>
                        <input onChange={(e) => this.handleChange(e, 'address')} type="text"/>
                    </div>
                    <div className='inputs'>
                        City 
                        <input onChange={(e) => this.handleChange(e, 'city')} type="text"/>
                        State
                        <input onChange={(e) => this.handleChange(e, 'uState')} type="text"/>
                        Zip 
                        <input onChange={(e) => this.handleChange(e, 'zip')} type="text"/>
                    </div>
                    <div className='next'>
                        <Link to='/addurl'><button onClick={() => this.saveChanges()}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}