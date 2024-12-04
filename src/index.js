import { useState, useEffect } from 'react'

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
      <div>
        <input type="text" defaultValue="{color}" onChange={handleColor} />
      </div>
      );
}