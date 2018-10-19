import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZipcode } from '../../ducks/reducer';
import './Wizard.css';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    render() {
        const { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props; 
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
                <Link to='/wizard/step2'>Next</Link>
                
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
    updateZipcode: updateZipcode
}

function mapStateToProps(state) {
    const { name, address, city, stateName, zipcode } = state;
    return {
        name,
        address,
        city,
        stateName,
        zipcode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);