import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode, updateImageUrl, updateMortgage } from '../../ducks/reducer';
import './Wizard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {

    addHouse = () => {
        let newHouse = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateName: this.props.stateName,
            zipcode: this.props.zipcode,
            image_url: this.props.image_url,
            mortgage: this.props.mortgage
        }
        axios.post('/api/houses', newHouse).then(() => {
            console.log('New house added!')
        }).catch(err => {
            console.error('Error on addHouse FE', err)
        })
    }

    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode, updateImageUrl, updateMortgage } = this.props; 
        return (
            <div className="body">
            <div className="wrapper fullheight">
                <div className="parent">
                <h1>Add New Listing</h1>
                <Link className="links" to='/'>Cancel</Link>
                </div>
                Property Name:<input onChange={e => updateName(e.target.value)}></input><br></br>
                Address:<input onChange={e => updateAddress(e.target.value)}></input><br></br>
                City:<input onChange={e => updateCity(e.target.value)}></input><br></br>
                State:<input onChange={e => updateState(e.target.value)}></input><br></br>
                Zip:<input onChange={e => updateZipcode(e.target.value)}></input><br></br>
                Image: <input onChange={e => updateImageUrl(e.target.value)}></input><br></br>
                Monthly Mortgage: <input onChange={e => updateMortgage(e.target.value)}></input><br></br>
                <button onClick={() => this.addHouse()}>Add Property</button>

                
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateName: updateName,
    updateAddress: updateAddress,
    updateCity: updateCity,
    updateState: updateState,
    updateZipcode: updateZipcode,
    updateImageUrl: updateImageUrl,
    updateMortgage: updateMortgage
}

function mapStateToProps(state) {
    const { name, address, city, stateName, zipcode, image_url, mortgage } = state;
    return {
        name,
        address,
        city,
        stateName,
        zipcode,
        image_url,
        mortgage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);