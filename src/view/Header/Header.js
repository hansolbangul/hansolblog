import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className="contain">
            <div className="menu">
                <ul className="menuBar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Protfolio</Link>
                    </li>
                    <li>
                        <Link to="/post">post</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul className="menuBar">
                    <li>
                        <a href="https://github.com/hansolbangul">
                            <GithubOutlined />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_hansolbangul/">
                            <InstagramOutlined />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
