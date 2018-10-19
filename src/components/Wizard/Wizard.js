import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode, updateImageUrl} from '../../ducks/reducer';
import axios from 'axios';

class Wizard extends Component {

    addHouse = () => {
        let newHouse = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateName: this.props.stateName,
            zipcode: this.props.zipcode,
            image_url: this.props.image_url
        }
        axios.post('/api/houses', newHouse).then(() => {
            console.log('New house added!')
        }).catch(err => {
            console.error('Error on addHouse FE', err)
        })
    }

    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode, updateImageUrl } = this.props; 
        return (
            <div>
                <h1>Wizard</h1>
                Property Name:<input onChange={e => updateName(e.target.value)}></input><br></br>
                Address:<input onChange={e => updateAddress(e.target.value)}></input><br></br>
                City:<input onChange={e => updateCity(e.target.value)}></input><br></br>
                State:<input onChange={e => updateState(e.target.value)}></input><br></br>
                Zip:<input onChange={e => updateZipcode(e.target.value)}></input><br></br>
                ImageUrl: <input onChange={e => updateImageUrl(e.target.value)}></input><br></br>
                <button onClick={() => this.addHouse()}>Add Property</button>
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
    updateImageUrl: updateImageUrl
}

function mapStateToProps(state) {
    const { name, address, city, stateName, zipcode, image_url } = state;
    return {
        name,
        address,
        city,
        stateName,
        zipcode,
        image_url
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);