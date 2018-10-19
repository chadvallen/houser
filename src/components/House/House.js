import React from 'react'
import './House.css';

export default function House(props) {
    return (
        <div className="house">
            <h2>{props.name}</h2>
            <img src={props.image_url} />
            <p>{props.address}</p>
            <p>{props.city}, {props.statename} {props.zipcode}</p>
            <p>Monthly Mortgage: ${props.mortgage}</p>
            <button onClick={props.deleteHouse}>Delete</button>
        </div>
    )
}