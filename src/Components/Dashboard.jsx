import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {REMOVE_HOUSE_FROM_LIST} from '../store'

export default class DashDoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            houseList: []
        }
    }
    // async componentDidMount() {
    //     store.subscribe(async () => {
    //         const reduxState = await store.getState()
    //         // console.log('dashborad', reduxState.houses)
    //         this.setState({
    //             houseList: reduxState.houses
    //         })
    //     })
    // }
    handleDelete = (house_id) => {
        const action = {
            type: REMOVE_HOUSE_FROM_LIST, 
            payload: house_id
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
                        this.state.houseList.map(houseList => {
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
                                <button onClick={() => this.handleDelete(houseList.house_id)}>X</button>
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