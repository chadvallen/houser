import React, { Component } from 'react'
import House from '../House/House';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super ();

        this.state = {
            inventory: []
        }

        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        console.log('Component mounted!');
        this.getHouses();
    }

    getHouses = () => {
        axios.get('/api/houses').then(res => {
            console.log('Got houses!')
            console.log(res.data);
            this.setState({inventory: res.data})
        }).catch(err => {
            console.error('Error on getHouses', err)
        })
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(() => {
            console.log('House deleted')
        }).catch(err => {
            console.error('Error on deleteHouse', err)
        })
        this.getHouses()
    }

    render() {
        let houses = this.state.inventory.map(item => {
            return (<div>
            <House name={item.name} address={item.address} city={item.city} statename={item.statename} zipcode={item.zipcode} image_url={item.image_url} mortgage={item.mortgage} deleteHouse={() => this.deleteHouse(item.id)} />
            
            </div>
            )
        })
        return (
            <div className="body">
            <div className="wrapper">
                <div className="parent">
                <h1>Houses</h1>
                <Link className="links" to='/wizard'>Add new property</Link>
                </div>
                {houses}
            </div>
            </div>
        )
    }
}

export default Dashboard;