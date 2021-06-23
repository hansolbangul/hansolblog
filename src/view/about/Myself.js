import React from 'react';
import './about.css';

const Myself = () => {
    return (
        <div className="centerContain">
            <div className="aboutForm">
                <h3>INFO</h3>
                <div className="aboutText">
                    <p style={{ fontSize: '1.25rem' }}>* 성결대학교 자연어처리 연구</p>
                    <p style={{ fontSize: '0.835rem', marginBottom: '0.5rem' }}>
                        2018-06 ~ 2019-09 (총 2명)
                    </p>
                    <p>
                        - 기사 속 내용들을 국립국어원의 형태소 태그를 토대로 자동으로 형태소 태깅을
                        진행하는 연구.
                    </p>
                    <p>
                        - 국립국어원을 토대로 단어마다 명사, 형용사 등{' '}
                        <span className="emphasis">형태소 태깅이 자동</span>으로 가능한 프로그램
                        구현, 선임연구원의 코드 리뷰
                    </p>
                    <p style={{ fontSize: '0.835rem', marginBottom: '0.5rem' }}>
                        code: python, IDE: pycharm
                    </p>
                </div>
                <br />
                <div className="aboutText">
                    <p style={{ fontSize: '1.25rem' }}>* 성결대학교 컴퓨터공학과 근로조교</p>
                    <p style={{ fontSize: '0.835rem', marginBottom: '0.5rem' }}>
                        2017-04 ~ 2019-06 / 2020-12 ~ 2021-06
                    </p>
                    <p>- 성결대학교 컴퓨터공학과 강의실 401, 404, 405, 406, 407호 관리.</p>
                    <p>
                        - 각 강의실마다&nbsp;
                        <span className="emphasis">
                            os설치, 하드웨어(cpu, 램, 그래픽카드 등)교체 및 수리, 소프트웨어(IDE,
                            Office, TextViewer 등)설치
                        </span>
                    </p>
                    <p style={{ fontSize: '0.835rem', marginBottom: '0.5rem' }}>
                        add: 2019-03 ~ 2019-09 조교장
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Myself;
