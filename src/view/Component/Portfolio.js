import React from 'react';
import movie from '../Img/movie.png';

const Portfolio = () => {
    return (
        <div className="centerContain portfolio">
            <h3>PORTFOLIO</h3>
            <div className="pfForm">
                <img src={movie} alt={movie} />
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.3' }}>
                    <div style={{ display: 'inline', padding: 0 }}>
                        <h4 className="tag">hello world</h4>
                        <p className="body">hello</p>
                    </div>
                    <div style={{ display: 'inline', padding: 0 }}>
                        <h4 className="tag">hello world</h4>
                        <p className="body">hello</p>
                    </div>
                    <div style={{ display: 'inline', padding: 0 }}>
                        <h4 className="tag">hello world</h4>
                        <p className="body">hello</p>
                    </div>
                    <div style={{ display: 'inline', padding: 0 }}>
                        <h4 className="tag">hello world</h4>
                        <p className="body">hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
