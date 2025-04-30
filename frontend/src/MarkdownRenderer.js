import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

const renderers = {
    p: ({ node, ...props }) => <p className="markdown-paragraph" {...props} />,
    h1: ({ node, ...props }) => <h1 className="markdown-heading" {...props} />,
    h2: ({ node, ...props }) => <h2 className="markdown-heading" {...props} />,
    h3: ({ node, ...props }) => <h3 className="markdown-heading" {...props} />,
    code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <pre className="markdown-code-block">
                <code className={className} {...props}>
                    {children}
                </code>
            </pre>
        ) : (
            <code className="markdown-inline-code" {...props}>
                {children}
            </code>
        );
    },
};

export const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={renderers}
        >
            {content}
        </ReactMarkdown>
    );
};