import React from 'react';
import Info from './Info';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio';
import WhoAMI from '../about/WhoAMI';

const Component = () => {
    return (
        <div className="infoContain">
            <div className="columnContain">
                <Info />
                <hr />
                <WhoAMI />
                <hr />
                <Portfolio />
                <hr />
                <Footer />
            </div>
        </div>
    );
};

export default Component;
