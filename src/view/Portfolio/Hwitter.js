import React from 'react';
import './Portfolio.css';

const Hwitter = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>Hwitter</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-06</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        Front-End는 react.js를 사용하였으며 back은 firebase를 사용하였습니다. 트윗은
                        실시간으로 작동되며 유저는 원하는 유튜브 뮤직을 베너에 설정할 수 있습니다.
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>javascript, react.js, firebase, gh-pages</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/hwitter">
                            https://github.com/hansolbangul/hwitter
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="hwitter.live">hwitter.live</a>
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
                        src="https://hansolbangul.github.io/hwitter/#/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Hwitter;
