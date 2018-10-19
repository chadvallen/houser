import React, { Component } from 'react'
import House from '../House/House';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage } from '../../ducks/reducer';

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
            {this.getHouses()}
        }).catch(err => {
            console.error('Error on deleteHouse', err)
        })
        
    }

    updateHouse(mortgage, id){
        axios.put(`/api/houses/${id}`, {mortgage}).then(() => {
            console.log('Mortgage updated')
            {this.getHouses()};
        }).catch(err => {
            console.error('Error on updateMortgage', err)
        })
        
    }

    render() {
        const { updateMortgage } = this.props;
        let houses = this.state.inventory.map(item => {
            return (
            <div className="house">
            <House name={item.name} address={item.address} city={item.city} statename={item.statename} zipcode={item.zipcode} image_url={item.image_url} mortgage={item.mortgage} />
            Update Mortgage: <input onChange={e => updateMortgage(e.target.value)}></input>
            <button onClick={() => this.updateHouse(this.props.mortgage, item.id)}>Update</button><br></br>
            <button onClick={() => this.deleteHouse(item.id)}>Delete</button>
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

const mapDispatchToProps = {
    updateMortgage: updateMortgage
}

function mapStateToProps(state) {
    const { mortgage } = state;
    return {
        mortgage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);