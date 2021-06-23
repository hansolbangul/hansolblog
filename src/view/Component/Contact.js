import React from 'react';
import { SendOutlined } from '@ant-design/icons';
import './Component.css';

const Contact = () => {
    return (
        <div className="contactForm">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className="contact">CONTACT ME</p>
                <SendOutlined />
            </div>
            <p className="email">ruaenddl981028@naver.com</p>
        </div>
    );
};

export default Contact;
