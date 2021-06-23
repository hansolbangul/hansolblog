import React from 'react';
import './Portfolio.css';

const Coinprice = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>Coinprice</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-02~2021-04</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        upbit의 시세를 받아와 정렬, 검색, 차트확인이 가능한 테이블 사이트 개발,
                        투자자에게 유익한 정보를 제공하기 위한 사이트
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>javascript, react.js, gh-pages</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/coin_price">
                            https://github.com/hansolbangul/coin_price
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://hansolbangul.github.io/coin_price/#/">
                            https://hansolbangul.github.io/coin_price/#/
                        </a>
                    </p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        border: '2px solid rgb(181, 181, 181)',
                    }}
                >
                    <iframe
                        style={{
                            position: 'relative',
                            objectFit: 'cover',
                            border: 'none',
                            width: '100%',
                            height: '65vh',
                            // borderRadius: 30,
                        }}
                        src="https://hansolbangul.github.io/coin_price/#/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Coinprice;
