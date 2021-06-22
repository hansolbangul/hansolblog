import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Component from '../Component/Component';
import Post from '../Post/Post';
import NewPost from '../Post/newPost/NewPost';

const Router = ({ posts }) => {
    return (
        <HashRouter>
            <div>
                <Header />
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
                </Switch>
            </div>
        </HashRouter>
    );
};

{
    /* <Route exact path="/community/:id" component={Post} /> */
}

export default Router;
