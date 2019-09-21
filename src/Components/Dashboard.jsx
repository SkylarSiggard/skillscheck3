import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, {REMOVE_HOUSE_TO_LIST} from '../store'


export default class DashDoard extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        console.log(reduxState.houses)
        this.state = {
            houseList: reduxState.houses
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            // const reduxState = store.getState()
            const list = axios.get('/api/house').then(res => {
                this.setState({
                    houseList: list.data
                })
            })
            console.log(list)
        })
    }
    handleDelete = (house_id) => {
        axios.delete(`/api/house/${house_id}`).then(res => {
            this.setState({
                houseList: res.data
            })
        })
    }
    render() {
        return(
            <div className='dashboard'>
                <div className='dashNav'>
                    <div>DashDoard</div>
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
                                    <h6>State: {houseList.state}</h6>
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
            {/* <h1>{this.state.houseList.length ? this.state.houseList[0].name : null}</h1> */}
            </div>
            </div>
        )
    }
}