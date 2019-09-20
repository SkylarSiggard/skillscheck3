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
                <div className='inputs1'>
                        Property Name 
                    <div className='inputs'>
                        <input type="text"/>
                    </div>
                        Address 
                    <div className='inputs'>
                        <input type="text"/>
                    </div>
                    <div className='inputs'>
                        City 
                        <input type="text"/>
                        State
                        <input type="text"/>
                        Zip 
                        <input type="text"/>
                    </div>
                    <div className='next'>
                        <button>Next Step</button>
                    </div>
                </div>
            </div>
        )
    }
}