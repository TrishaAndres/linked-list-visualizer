import React from 'react';
import './Node.css';

export default function Node({ value, isLast }) {
  return (
    <div className="node-container">
      <div className="node">
        <span>{value}</span>
      </div>
      {!isLast && <div className="arrow">→</div>}
    </div>
  );
}
