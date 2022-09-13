import React from 'react';
import './Main.css';
import { signs } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';
import zodiac from '../../zodiac.jpg';

export default function main() {
  return (
    <main style={{ backgroundImage: `url(${zodiac})`, 
      backgroundRepeat: 'no-repeat', backgroundPosition: 'fixed', backgroundSize: 'cover' }}>
      <div className="zodiac-container">
        {signs.map((sign) => (
          <Zodiac key={sign.name} name={sign.name} dates={sign.dates} symbol={sign.symbol} />
        ))}
      </div>
    </main>
  );
}

