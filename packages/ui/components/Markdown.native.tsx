import React from 'react'
import MarkdownDisplay from 'react-native-markdown-display'

export const Markdown = ({ content }: { content: string }) => {
  return <MarkdownDisplay>{content}</MarkdownDisplay>
}
