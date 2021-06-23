import React from 'react';
import './Portfolio.css';

const Movie = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 프로젝트 명</p>
                    <p style={{ fontWeight: '500' }}>Movie_app</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 기간</p>
                    <p style={{ fontWeight: '500' }}>2021-02~2021-03</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 설명</p>
                    <p style={{ width: '90%', fontWeight: '500' }}>
                        movie api를 받아 영화들의 정보를 뽑아 보여주는 사이트 개발
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 개발 스택</p>
                    <p style={{ fontWeight: '500' }}>javascript, react.js, gh-pages</p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 깃 저장소</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://github.com/hansolbangul/movie_app_2021">
                            https://github.com/hansolbangul/movie_app_2021
                        </a>
                    </p>
                </div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <p style={{ width: '10%', fontWeight: '600' }}>- 사이트</p>
                    <p style={{ fontWeight: '500' }}>
                        <a href="https://hansolbangul.github.io/movie_app_2021/#/">
                            https://hansolbangul.github.io/movie_app_2021/#/
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
                        src="https://hansolbangul.github.io/movie_app_2021/#/"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Movie;
