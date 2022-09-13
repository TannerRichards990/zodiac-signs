import React from 'react';
import './Zodiac.css';

export default function zodiac(props) {
  return (
    <div className="zodiac-frame">
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/${props.name}_PNG.png`} />
      <span>{props.name}</span>
      <span>{props.dates}</span>
      <span>{props.symbol}</span>
    </div>
  );
}