import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateImageUrl, updateMortgage } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Wizard/Wizard';

class Step2 extends Component {

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
        const { updateImageUrl, updateMortgage } = this.props; 
        return (
            <div className="body">
            <div className="wrapper fullheight">
                <Link className="links" to='/'>Cancel</Link>
                Image: <input onChange={e => updateImageUrl(e.target.value)}></input>
                Monthly Mortgage: <input onChange={e => updateMortgage(e.target.value)}></input>
                <button onClick={() => this.addHouse()}>Add Property</button>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateImageUrl: updateImageUrl,
    updateMortgage: updateMortgage,
}

function mapStateToProps(state) {
    const { image_url, mortgage } = state;
    return {
        image_url,
        mortgage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);