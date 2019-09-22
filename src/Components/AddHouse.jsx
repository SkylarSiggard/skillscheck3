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
            zip: null
        }
        this.handleChangeProperty = this.handleChangeProperty.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
    }


    handleChangeProperty(a) {
        this.setState({
            property: a.target.value
        })
    }
    handleChangeAddress(b){
        this.setState({
            property: b.target.value
        })
    }
    handleChangeCity = (c) => {
        this.setState({
            property: c.target.value
        })
    }
    handleChangeState = (d) => {
        this.setState({
            property: d.target.value
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
                        <input value={this.state.text} onChange={(a) => this.handleChangeProperty(a)} type="text"/>
                    </div>
                        Address 
                    <div className='inputs'>
                        <input value={this.state.text} onChange={(b) => this.handleChangeAddress(b)} type="text"/>
                    </div>
                    <div className='inputs'>
                        City 
                        <input value={this.state.text} onChange={(c) => this.handleChangeCity(c)} type="text"/>
                        State
                        <input value={this.state.text} onChange={(d) => this.handleChangeState(d)} type="text"/>
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