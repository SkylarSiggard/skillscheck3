import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class House extends Component {
    constructor() {
        super()
        this.state = {
            property: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        this.handleChangeProperty = this.handleChangeProperty.bind(this)
    }


    handleChangeProperty(el) {
        this.setState({
            property: el.target.value
        })
    }
    handleChangeAddress = (e) => {
        this.setState({
            property: e.target.value
        })
    }
    handleChangeCity = (e) => {
        this.setState({
            property: e.target.value
        })
    }
    handleChangeState = (e) => {
        this.setState({
            property: e.target.value
        })
    }
    handleChangeZip = (e) => {
        this.setState({
            property: e.target.value
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
                        <input onChange={(el) => this.handleChangeProperty(el)} type="text"/>
                    </div>
                        Address 
                    <div className='inputs'>
                        <input onChange={(e) => this.handleChangeAddress(e)} type="text"/>
                    </div>
                    <div className='inputs'>
                        City 
                        <input onChange={(e) => this.handleChangeCity(e)} type="text"/>
                        State
                        <input onChange={(e) => this.handleChangeState(e)} type="text"/>
                        Zip 
                        <input value={this.state.text} onChange={(e) => this.handleChangeZip(e)} type="text"/>
                    </div>
                    <div className='next'>
                        <Link to='/addurl'><button>Next Step</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}