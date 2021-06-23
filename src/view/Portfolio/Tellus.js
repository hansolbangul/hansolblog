import React from 'react';
import './Portfolio.css';
import tellus from '../Img/tellus.png';

const Tellus = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>Tellus 동아리 사이트</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2019-05~2019-06</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        성결대학교 동아리 Tellus의 봉사단원, 봉사 실적 등을 기록하기 위한 웹
                        사이트를 개발
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>html, css, javascript, jsp</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: '65vh',
                        border: '2px solid rgb(181, 181, 181)',
                    }}
                >
                    <img src={tellus} alt={tellus} width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
};

export default Tellus;
