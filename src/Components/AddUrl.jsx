import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AddName extends Component {
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>Add New Listing</div>
                    <button>Cancel</button>
                </div>
                <div className='next1'>
                    <button>Prevous</button>
                    <button>Next Step</button>
                </div>
            </div>
        )
    }
}