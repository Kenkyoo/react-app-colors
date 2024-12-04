import { useState, useEffect } from 'react'
import ColorBox from './components/validateColor';
import RandomColor from './components/randomColor';
import Clipboard from './components/clipboard';

export default function ChangeBackground() {
    const [color, setColor] = useState('');

    useEffect(() => {
        if (color) {
          document.body.style.backgroundColor = color; 
        }
      }, [color]);

    function handleColor (e) {
      setColor(e.target.value)
    }

    return (
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <label className="input input-bordered flex items-center gap-2">
            Color
            <input id='colorName' onChange={handleColor} type="text" className="grow" placeholder="Blue, green, #eee, etc" />
          </label>
          <Clipboard inputValue={color}/>
          <ColorBox color= {color}/>
          <div className="card-actions justify-end">
            <RandomColor setColor={setColor}/>
          </div>
        </div>
      </div>
      );
}