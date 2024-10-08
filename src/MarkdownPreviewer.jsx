import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.css';

// Default markdown content
const defaultMarkdown = `
# Welcome to My Markdown Previewer!

## This is a sub-heading...

Here's a [link](https://www.example.com).

Some inline code: \`<div></div>\`.

\`\`\`
// This is a code block:
function greet() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote here!

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**Bold text**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Use the marked library to convert markdown to HTML
  const getMarkdownText = (markdown) => {
    const rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter your markdown here"
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText(markdown)}
      />
    </div>
  );
};

export default MarkdownPreviewer;
