import React from 'react';
import Node from './Node';

export default function LinkedList({ nodes }) {
  return (
    <div className="linked-list">
      {nodes.map((node, index) => (
        <Node key={node.id} value={node.value} isLast={index === nodes.length - 1} />
      ))}
    </div>
  );
}
