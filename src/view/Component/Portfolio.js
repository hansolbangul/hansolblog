import React from 'react';
import { Link } from 'react-router-dom';
import movie from '../Img/movie.png';
import coingkoo from '../Img/coingkoo.png';
import cssgame from '../Img/cssgame.png';
import hwitter from '../Img/hwitter.png';
import tellus from '../Img/tellus.png';
import coinprice from '../Img/coinPrice.png';

const photoArr = [tellus, movie, coinprice, coingkoo, cssgame, hwitter];

const Portfolio = () => {
    return (
        <div className="centerContain portfolio">
            <h3>PORTFOLIO</h3>
            <div className="pfForm">
                {photoArr &&
                    photoArr.map((e, index) => (
                        <div key={index} className="portThum">
                            <div className="portcodeThum">
                                <Link to={`/portfolio/${e.split('/')[3].split('.')[0]}`}>
                                    <img src={e} alt={e} />
                                </Link>
                            </div>
                            <div className="portInfo">
                                <h3>{e.split('/')[3].split('.')[0]}</h3>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Portfolio;
