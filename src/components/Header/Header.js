import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div>
            <h2>Header</h2>
            <Link to='/'>Dashboard</Link>
            <Link to='/wizard'>Wizard</Link>
        </div>
    )
}
