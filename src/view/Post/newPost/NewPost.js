import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router';
import Disqus from 'disqus-react';
import '../Post.css';

const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 1.4rem;
`;

const InlineCode = styled.span`
    background: yellow;
`;

function InlineCodeBlock(children) {
    return <InlineCode>{children.value}</InlineCode>;
}

const NewPost = ({ posts }) => {
    let { title } = useParams();
    let post = {};
    posts.map((e) => {
        if (e.title === title && e !== false)
            post = {
                body: e.body,
                count: e.count,
                date: e.date,
                tag: e.tag,
                thumbnail: e.thumbnail,
                title: e.title,
            };
    });

    console.log(post);
    const disqusShortname = 'https-hansolbangul-github-io';
    const disqusConfig = {
        url: 'http://localhost:3000',
        identifier: 'article-id',
        title: 'Title of Your Article',
    };

    return (
        <div className="newpost">
            {posts.map((e) => {
                return (
                    e.title === title && (
                        <>
                            <h1 className="title">{e.title}</h1>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    marginBottom: '3rem',
                                }}
                            >
                                {e.tag.map((e) => (
                                    <span
                                        style={{
                                            margin: '0 0.4rem',
                                            fontSize: '1.2rem',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {e}
                                    </span>
                                ))}
                            </div>
                            <div className="bodyContent">
                                <MarkDownStyle>
                                    <ReactMarkdown
                                        rehypePlugins={[rehypeRaw]}
                                        remarkPlugins={[gfm]}
                                    >
                                        {e.body}
                                    </ReactMarkdown>
                                </MarkDownStyle>
                            </div>
                        </>
                    )
                );
            })}
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
    );
};

export default NewPost;
