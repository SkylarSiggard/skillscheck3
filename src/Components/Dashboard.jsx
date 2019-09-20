import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class DashDoard extends Component {
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>DashDoard</div>
                    <Link to ='/addhouse'><button>Add New Property</button></Link>
                </div>
                <></>
                <div className='list'>Home Listings</div>

            </div>
        )
    }
}