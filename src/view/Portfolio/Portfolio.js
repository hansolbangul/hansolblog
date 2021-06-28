import React from 'react';
import movie from '../Img/movie.png';
import coingkoo from '../Img/coingkoo.png';
import cssgame from '../Img/cssgame.png';
import hwitter from '../Img/hwitter.png';
import tellus from '../Img/tellus.png';
import coinprice from '../Img/coinPrice.png';
import Folio from '../Component/Portfolio';

const photoArr = [tellus, movie, coinprice, coingkoo, cssgame, hwitter];

const Portfolio = () => {
    return (
        <div className="folioForm">
            <div className="folioCenter">
                <Folio />
            </div>
        </div>
    );
};

export default Portfolio;
