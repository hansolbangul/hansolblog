import React from 'react';
import './Post.css';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import cat from '../Img/고먐미/고먐미.jpeg';
// import NewPost from './newPost/NewPost';

const Post = ({ posts }) => {
    const result = posts.sort((a, b) => {
        return a.count - b.count;
    });

    return (
        <div className="postCenter">
            <div className="postForm">
                <div className="thumbnail">
                    {result &&
                        result
                            .slice(0)
                            .reverse()
                            .map((e, index) => (
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
                                        <div className="postTitle">
                                            <h4>{e.title}</h4>
                                        </div>
                                        <div className="postsub">
                                            <ReactMarkdown className="pbody">
                                                {e.body.split('\n')[1]}
                                            </ReactMarkdown>
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <span style={{ fontWeight: 700 }}>{e.date}</span>
                                            <span>
                                                {e.tag.map((e) => (
                                                    <span
                                                        style={{
                                                            marginRight: '5px',
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {e}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
};

export default Post;
