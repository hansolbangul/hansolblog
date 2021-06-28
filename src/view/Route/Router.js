import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Component from '../Component/Component';
import Post from '../Post/Post';
import NewPost from '../Post/newPost/NewPost';
import Hwitter from '../Portfolio/Hwitter';
import Movie from '../Portfolio/Movie';
import Tellus from '../Portfolio/Tellus';
import Cssgame from '../Portfolio/Cssgame';
import CoinPrice from '../Portfolio/Coinprice';
import Coingkoo from '../Portfolio/Coingkoo';
import ScrollToTop from '../../ScrollToTop';
import About from '../about/About';
import Portfolio from '../Portfolio/Portfolio';
import Vuepost from '../Portfolio/Vuepost';

const Router = ({ posts }) => {
    return (
        <HashRouter>
            <div>
                <Header />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <Component />
                        </Route>
                        <Route exact path="/post">
                            <Post posts={posts} />
                        </Route>
                        <Route exact path="/post/:title">
                            <NewPost posts={posts} />
                        </Route>
                        <Route exact path="/portfolio/hwitter">
                            <Hwitter />
                        </Route>
                        <Route exact path="/portfolio/movie">
                            <Movie />
                        </Route>
                        <Route exact path="/portfolio/tellus">
                            <Tellus />
                        </Route>
                        <Route exact path="/portfolio/cssgame">
                            <Cssgame />
                        </Route>
                        <Route exact path="/portfolio/coinprice">
                            <CoinPrice />
                        </Route>
                        <Route exact path="/portfolio/coingkoo">
                            <Coingkoo />
                        </Route>
                        <Route exact path="/portfolio/vuepost">
                            <Vuepost />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio />
                        </Route>
                    </Switch>
                </ScrollToTop>
            </div>
        </HashRouter>
    );
};

{
    /* <Route exact path="/community/:id" component={Post} /> */
}

export default Router;
