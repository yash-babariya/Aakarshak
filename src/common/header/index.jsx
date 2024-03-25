import React from 'react';
import './header.scss';
import logo from '../../assets/logo/logo.png'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import profilePic from '../../assets/images/profile-pic.png';

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <header>
                    <div className="logo">
                        <img src={logo} alt="company" />
                    </div>
                    <aside>
                        <img className='icon' src={profilePic} alt="profile-pic" />
                        <PiShoppingCartSimpleFill className='icon' />
                    </aside>
                </header>
            </div>
        </div>
    )
}
