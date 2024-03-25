import React from 'react';
import './herobanner.scss';
import logo from '../../../assets/logo/logo.png'

export default function Herobanner() {
    return (
        <div className='herobanner'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h1>Elevate Your Shopping Experience with Aakrshak</h1>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="button">
                        <button>explore</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
