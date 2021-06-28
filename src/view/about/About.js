import React from 'react';
import Myself from './Myself';
import WhoAMI from './WhoAMI';
import './about.css';
import logo from '../Img/my.png';

const About = () => {
    return (
        <div className="folioForm">
            <div className="centerAbout">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt={logo} />
                    <WhoAMI />
                </div>
                <hr />
                <Myself />
                <hr />
            </div>
        </div>
    );
};

export default About;
