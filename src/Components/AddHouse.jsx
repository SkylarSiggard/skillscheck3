import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_PROPERTY_TO_LIST, ADD_ADDRESS_TO_LIST, ADD_CITY_TO_LIST, ADD_STATE_TO_LIST, ADD_ZIP_TO_LIST} from './../store'

export default class House extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        console.log('addHouse',reduxState)
        this.state = {
            property: '',
            address: '',
            city: '',
            state: '',
            zip: ''            
            // property: reduxState.property,
            // address: reduxState.address,
            // city: reduxState.city,
            // state: reduxState.uState,
            // zip: reduxState.zip
        }
        this.handleChangeProperty = this.handleChangeProperty.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
    }
    handleChangeProperty(e) {
        this.setState({
            property: e.target.value
        })
    }
    handleChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }
    handleChangeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleChangeState = (e) => {
        this.setState({
            uState: e.target.value
        })
    }
    handleChangeZip = (e) => {
        this.setState({
            zip: e.target.value
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
                        <input value={this.state.text} onChange={(e) => this.handleChangeProperty(e)} type="text"/>
                    </div>
                        Address 
                    <div className='inputs'>
                        <input value={this.state.address} onChange={(e) => this.handleChangeAddress(e)} type="text"/>
                    </div>
                    <div className='inputs'>
                        City 
                        <input value={this.state.city} onChange={(e) => this.handleChangeCity(e)} type="text"/>
                        State
                        <input value={this.state.uState} onChange={(e) => this.handleChangeState(e)} type="text"/>
                        Zip 
                        <input value={this.state.zip} onChange={(e) => this.handleChangeZip(e)} type="text"/>
                    </div>
                    <div className='next'>
                        <Link to='/addurl'><button onClick={() => this.saveChanges()}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}