import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class DashDoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            houses: []
        }
    }
    async componentDidMount() {
        const list = await axios.get('/api/house')
        this.setState({
            houses: list.data
        })
    }
    handleDelete = (house_id) => {
        axios.delete(`/api/house/${house_id}`).then(res => {
            this.setState({
                houses: res.data
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
                    this.state.houses.length ? (
                        this.state.houses.map(houses => {
                            return (
                            <div className='itemBox'>
                                <div className='picture'>
                                    <img src={houses.url} alt={houses.property}/>
                                </div>
                                <div>
                                    <h6>Property Name: {houses.property}</h6>
                                    <h6>Address: {houses.address}</h6>
                                    <h6>City: {houses.city}</h6>
                                    <h6>State: {houses.state}</h6>
                                    <h6>Zip: {houses.zip}</h6>
                                </div>
                                <div>
                                    <h6>Monthly Mortgage: {houses.mortgage}</h6>
                                    <h6>Desired Rent: {houses.rent}</h6>
                                </div>
                                <div className='cancel'>
                                <button onClick={() => this.handleDelete(houses.house_id)}>X</button>
                                </div>
                            </div>
                )
            })
            ) : null
            }
            {/* <h1>{this.state.houses.length ? this.state.houses[0].name : null}</h1> */}
            </div>
            </div>
        )
    }
}