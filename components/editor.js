import React, { useState } from 'react';
import ReactCodemirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { useColorMode } from '@chakra-ui/react';
import { oneDark } from '@codemirror/theme-one-dark';
import { marked } from 'marked';
import { markdown } from '@codemirror/lang-markdown';

const Editor = () => {
  const { colorMode } = useColorMode();
  const [code, setCode] = useState('// Hi Markdown...');

  const exportMarkdown = () => {
    // TODO add a markdown export button => migrate to new button component
    const blob = new Blob([code], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'markdown.md';
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="container">
      <div className="editor-pane">
        <h2>Code Editor</h2>
        <ReactCodemirror
          value={code}
          height="300px"
          extensions={[markdown()]}
          theme={colorMode === 'dark' ? oneDark : 'light'}
          onChange={(value) => setCode(value)}
        />
      </div>
      <div>
      <button onClick={exportMarkdown}>Export as .md</button>
      </div>

      <div
        className="preview-pane"
        dangerouslySetInnerHTML={{ __html: marked(code) }}
      />
    </div>
  );
};

export default Editor;
