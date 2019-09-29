import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {REMOVE_HOUSE_FROM_LIST} from '../store'

export default class DashDoard extends Component {
    constructor(props){
        super(props)
        const reduxState = store.getState()
        this.state = {
            houseList: reduxState.houses
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                houseList: reduxState.houses
            })
        })
    }
    handleDelete = (index) => {
        const action = {
            type: REMOVE_HOUSE_FROM_LIST, 
            payload: index
        }
        store.dispatch(action)
    }
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>DashBoard</div>
                    <Link to ='/addhouse'><button>Add New Property</button></Link>
                </div>
                <></>
                <div className='list'>Home Listings</div>
                <hr/>
                <div>
                {
                    this.state.houseList.length ? (
                        this.state.houseList.map((houseList, index) => {
                            return (
                            <div className='itemBox'>
                                <div className='picture'>
                                    <img src={houseList.url} alt={houseList.property}/>
                                </div>
                                <div>
                                    <h6>Property Name: {houseList.property}</h6>
                                    <h6>Address: {houseList.address}</h6>
                                    <h6>City: {houseList.city}</h6>
                                    <h6>State: {houseList.uState}</h6>
                                    <h6>Zip: {houseList.zip}</h6>
                                </div>
                                <div>
                                    <h6>Monthly Mortgage: {houseList.mortgage}</h6>
                                    <h6>Desired Rent: {houseList.rent}</h6>
                                </div>
                                <div className='cancel'>
                                <button onClick={() => this.handleDelete(index)}>X</button>
                                </div>
                            </div>
                )
            })
            ) : null
            }
            <h1>{this.state.houseList.length ? this.state.houseList[0].name : null}</h1>
            </div>
            </div>
        )
    }
}