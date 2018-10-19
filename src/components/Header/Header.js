import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(){
    return (
        <div>
            <div className='header'>
            <h2 className='houser'>Houser</h2>
            <Link className="links" to='/'>Dashboard</Link>
            <Link className="links" to='/wizard'>Wizard</Link>
            </div>
        </div>
    )
}
