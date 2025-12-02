import React from 'react';
import Markdown from 'react-native-markdown-display';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <Markdown>
      {content}
    </Markdown>
  );
};
