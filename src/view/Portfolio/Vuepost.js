import React from 'react';

const Vuepost = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>Vuepost</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-06</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        Vue와 firebase를 통해 게시판 구현 오픈소스. 프로젝트를 clone받아 본인의
                        firebase의 값을 넣으면 관리가 가능하다.
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>javascript, vue, gh-pages</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/vuepost">
                            https://github.com/hansolbangul/vuepost
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://hansolbangul.github.io/vuepost/">
                            https://hansolbangul.github.io/vuepost/
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
                        src="https://hansolbangul.github.io/vuepost/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Vuepost;
