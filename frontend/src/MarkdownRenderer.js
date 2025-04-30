import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

import { CustomH1 } from './CustomH1';
import { CustomImage } from './CustomImage';

export const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: CustomH1,
        img: CustomImage,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
