import React from 'react';
import './about.css';

const WhoAMI = () => {
    return (
        <div className="centerContain">
            <div className="aboutForm">
                <h3>WHO AM I?</h3>
                <div className="aboutText">
                    <p>안녕하세요! 신입 프론트엔드 개발자 지한솔입니다 :)</p>
                    <p>
                        저는 배움을 즐거워하며 새로운 지식을 습득함에 있어 두려움이 적은 사람입니다.
                        우연히 접한 애플 공식 홈페이지를 통해 웹 개발자의 꿈을 키웠습니다. 웹에 대한
                        지식이 많지 않았지만, 모르는 것은 개발자 사이트 등을 통해 질문을 해가며
                        메꿔나갔습니다. 또한 아무리 작은 개인 프로젝트라도 많은 사람들에게 보여주고
                        싶어 항상 배포를 진행합니다. 작게는 gh-pages, 크게는 aws(domain 적용)까지
                        진행을 해가며 최대한 실무와 비슷한 환경을 만들며 공부해왔습니다. 아직은 비록
                        경력이 없는 주니어, 신입 개발자이지만 나아가 내가 만든 웹 사이트를 통해 많은
                        사람들이 편리함을 느끼는 그런&nbsp;
                        <span className="emphasis">"쓰고 싶은, 쓰게 되는, 쓸 수 있는 웹"</span>을
                        만들고 싶습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoAMI;
