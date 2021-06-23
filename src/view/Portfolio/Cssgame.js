import React from 'react';
import './Portfolio.css';

const Cssgame = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>css_flex_frog_game</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-06</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        css의 꽃인 display: flex 의 flex박스의 활용법을 개구리 이동 게임을 통해 쉽게
                        배울 수 있는 사이트를 개발
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>javascript, css, react.js, gh-pages</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/cssgame">
                            https://github.com/hansolbangul/cssgame
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://hansolbangul.github.io/cssgame/">
                            https://hansolbangul.github.io/cssgame/
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
                        src="https://hansolbangul.github.io/cssgame/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Cssgame;
