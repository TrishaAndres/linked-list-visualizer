import React, { useState } from 'react';

export default function Controls({ onAdd, onReset }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() !== '') {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="controls">
      <input
        type="text"
        value={input}
        placeholder="Enter node value"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Node</button>
      <button type="button" onClick={onReset}>Reset</button>
    </form>
  );
}
