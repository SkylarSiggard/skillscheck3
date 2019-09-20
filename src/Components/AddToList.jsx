import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>DashDoard</div>
                    <button>Add New Property</button>
                </div>
                <></>
                <div className='list'>Home Listings</div>

            </div>
        )
    }
}