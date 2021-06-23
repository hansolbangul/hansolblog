import React from 'react';
import Info from './Info';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio';
import WhoAMI from '../about/WhoAMI';
import Myself from '../about/Myself';
import StackBar from '../about/StackBar';
import Contact from './Contact';

const Component = () => {
    return (
        <div className="infoContain">
            <div className="columnContain">
                <Info />
                <hr />
                <WhoAMI />
                <Myself />
                <StackBar />
                <hr />
                <Portfolio />
                <hr />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Component;
