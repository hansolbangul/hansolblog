import React from 'react';
import './Portfolio.css';

const Coingkoo = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>cOingkoo</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-04~2021-06</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        Front-end는 react.js로 구현되었으며 Back-end는 node.js를 사용하였습니다.
                        포스트, 로그인 등과같은 데이터는 mongoDB를 사용하여 관리하였으며, 코인의 값,
                        기사, 코인 사이트는 가장 최신의 값을 가져왔습니다. 코인투자자는 실시간
                        차트와 코인의 설명, 기사등을 토대로 정보를 제공받습니다. Front는 AWS S3를
                        통해 Back은 AWS EC2를 통해 배포를 진행해보았습니다.
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>
                        javascript, react.js, mongodb, node.js, aws s3, aws ec2
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 역할</p>
                    <p style={{ fontWeight: '500' }}>
                        협업 프로젝트(총 3명 - Front) Front: 80%, Back: 60%, Deploy: 80%를
                        담당하였습니다.
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/coingkoo">
                            https://github.com/hansolbangul/coingkoo
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="http://coing-koo.s3-website.ap-northeast-2.amazonaws.com/">
                            http://coing-koo.s3-website.ap-northeast-2.amazonaws.com/
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
                        src="http://coing-koo.s3-website.ap-northeast-2.amazonaws.com/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Coingkoo;
