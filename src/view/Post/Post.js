import React from 'react';
import './Post.css';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import cat from '../Img/고먐미/고먐미.jpeg';
// import NewPost from './newPost/NewPost';

const Post = ({ posts }) => {
    console.log(posts);
    return (
        <div className="postCenter">
            <div className="postForm">
                <div className="thumbnail">
                    {posts &&
                        posts.map((e, index) => (
                            <div key={index} className="postThum">
                                <div className="codeThum">
                                    <Link to={`/post/${e.title}`}>
                                        {e.thumbnail !== '' ? (
                                            <img src={e.thumbnail} alt={e.thumbnail} />
                                        ) : (
                                            <img src={cat} alt="고먐미" />
                                        )}
                                    </Link>
                                </div>
                                <div className="postInfo">
                                    <h4>{e.title}</h4>
                                    <div>
                                        <ReactMarkdown className="pbody">
                                            {e.body.split('\n')[1]}
                                        </ReactMarkdown>
                                    </div>
                                    <span>2021-06-22</span>
                                </div>
                            </div>
                        ))}
                </div>

                <div>
                    {/* <NewPost /> */}
                    {/* hello */}
                </div>
            </div>
        </div>
    );
};

export default Post;
