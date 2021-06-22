import React from 'react';
import './Component.css';
import Typist from 'react-typist';

const Info = () => {
    return (
        <div className="centerContain infoMySelf">
            {/* <img src={myImg} /> */}
            <h2>
                <Typist>
                    안녕하세요!
                    <br />
                    신입 Front-end developer
                    <br />
                    지한솔 포트폴리오에 오신것을 환영합니다 :)
                </Typist>
            </h2>
        </div>
    );
};

export default Info;
