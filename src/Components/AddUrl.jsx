import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AddUrl extends Component {
    state = {
        url: ''
    }
    handleChange = (el) => {
        this.setState({
            url: el.target.value
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
                    <input value={this.state.text} onChange={(el) => this.handleChange(el)}type="text"/>
                </div>
                <div className='next1'>
                    <Link to='/addhouse'><button>Prevous Step</button></Link>
                    <Link to='/addlist'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}
