import React from 'react';
import Info from './Info';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio';

const Component = () => {
    return (
        <div className="infoContain">
            <div className="columnContain">
                <Info />
                <hr />
                <Portfolio />
                <Footer />
            </div>
        </div>
    );
};

export default Component;
