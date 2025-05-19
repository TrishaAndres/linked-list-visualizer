import React, { useState } from 'react';
import LinkedList from './components/LinkedList';
import Controls from './components/Controls';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';

function App() {
  const [nodes, setNodes] = useState([]);

  const addNode = (value) => {
    const newNode = {
      id: uuidv4(),
      value: value,
      next: null
    };

    setNodes(prev => {
      const updated = [...prev, newNode];
      if (updated.length > 1) {
        updated[updated.length - 2].next = newNode.id;
      }
      return updated;
    });
  };

  const resetList = () => setNodes([]);

  return (
    <div className="app">
      <h1>🧠 Linked List Visualizer</h1>
      <Controls onAdd={addNode} onReset={resetList} />
      <LinkedList nodes={nodes} />
    </div>
  );
}

export default App;
