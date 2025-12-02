import React from 'react'
import ReactMarkdown from 'react-markdown'

export const Markdown = ({ content }: { content: string }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>
}
