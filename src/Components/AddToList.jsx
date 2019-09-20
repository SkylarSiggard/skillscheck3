import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class List extends Component {
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
                    <input type="text"/>
                </div>
                <div className='inputs'>
                    Desired Mounthly Rent
                    <input type="text"/>
                </div>
                <div className='next1'>
                    <Link to='/addurl'><button>Prevous Step</button></Link>
                    <Link to='/'><button>Complete</button></Link>
                </div>
            </div>
        )
    }
}