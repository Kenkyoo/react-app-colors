import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ClipboardIcon } from '@heroicons/react/24/solid'

export default function Clipboard( { inputValue }) {

  const [copied, setCopied] = useState('');

    return (
      <div>
        <CopyToClipboard text={inputValue} onCopy={() => setCopied(true)}>
        <span style={{ cursor: 'pointer', marginRight: '10px' }}>
          <div className='tooltip tooltip-open tooltip-bottom' data-tip="hello">
          <ClipboardIcon className="size-6 h-10 w-6 text-white-500 cursor-pointer" />
          </div>
        </span>
        </CopyToClipboard>
  
        {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
      </div>
    );
  }
