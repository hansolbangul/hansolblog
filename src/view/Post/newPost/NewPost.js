import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Disqus from 'disqus-react';
import '../Post.css';

const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                style={dark}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        );
    },
};

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

const NewPost = ({ posts }, count) => {
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
    const disqusShortname = 'http-hansolbangul-com-2';
    const disqusConfig = {
        url: `https://hansolbangul.com/post/${post.title}`,
        identifier: post.title,
        title: post.title,
    };

    return (
        <div className="newpost">
            {posts.map((e, index) => {
                return (
                    e.title === title && (
                        <>
                            <h1 className="title">{e.title}</h1>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    marginBottom: '0.75rem',
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
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: '0.65rem',
                                    margin: '0',
                                    marginBottom: '3rem',
                                }}
                            >
                                {e.date}
                            </p>
                            <div className="bodyContent">
                                <MarkDownStyle>
                                    <ReactMarkdown
                                        components={components}
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
            <hr />
            <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
    );
};

export default NewPost;
