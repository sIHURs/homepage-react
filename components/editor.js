import React, { useState } from 'react';
import ReactCodemirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useColorMode } from '@chakra-ui/react';
import { oneDark } from '@codemirror/theme-one-dark';

const Editor = () => {
  const { colorMode } = useColorMode();
  const [code, setCode] = useState('// Start coding...');

  return (
    <div>
      <h2>Code Editor</h2>
      <ReactCodemirror
        value={code}
        height="300px"
        extensions={[javascript()]}
        theme={colorMode === 'dark' ? oneDark : 'light'}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default Editor;
