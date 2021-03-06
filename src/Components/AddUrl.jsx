import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADD_URL_TO_LIST} from './../store'

export default class AddUrl extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            url: reduxState.url
        }
    }
    handleChange = (e) => {
        this.setState({
            url: e.target.value
        })
    }
    saveChanges() {
        store.dispatch({
            type: ADD_URL_TO_LIST,
            payload: this.state.url
        })
    }

    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>Add New Listing</div>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div className='inputs'>
                    Image URL 
                    <input value={this.state.url} onChange={(el) => this.handleChange(el)}type="text"/>
                </div>
                <div className='next1'>
                    <Link to='/addhouse'><button>Prevous Step</button></Link>
                    <Link to='/addlist'><button onClick={() => this.saveChanges()}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}
