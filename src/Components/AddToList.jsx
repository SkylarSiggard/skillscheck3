import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class List extends Component {
    state = {
        mortgage: null,
        rent: null
    }
    handleChangeMortgage = (el) => {
        this.setState({
            mortgage: el.target.value
        })
    }
    handleChangeRent = (element) => {
        this.setState({
            mortgage: element.target.value
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
                    <input value={this.state.text} onChange={(el) => this.handleChangeMortgage(el)} type="text"/>
                </div>
                <div className='inputs'>
                    Desired Mounthly Rent
                    <input value={this.state.text} onChange={(element) => this.handleChangeRent(element)} type="text"/>
                </div>
                <div className='next1'>
                    <Link to='/addurl'><button>Prevous Step</button></Link>
                    <Link to='/'><button>Complete</button></Link>
                </div>
            </div>
        )
    }
}