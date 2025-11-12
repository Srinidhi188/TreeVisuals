// src/components/HeapDisplay.jsx
import { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import './TreeDisplay.css'; // We can reuse the same CSS as the BST

function HeapDisplay({ heapData }) { // We get the array as a prop
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !heapData || heapData.length === 0) {
      // Clear the display if there's no data
      const network = new Network(containerRef.current, { nodes: [], edges: [] }, {});
      return;
    }

    const nodes = [];
    const edges = [];

    // --- Build Nodes ---
    // Create a node for each item in the array
    for (let i = 0; i < heapData.length; i++) {
      nodes.push({
        id: i, // Use the index as the unique ID
        label: String(heapData[i]), // Show the value as the label
        font: { size: 24, color: '#333' },
        color: { background: '#ffffff', border: '#27ae60' }, // Green border
        shape: 'box',
        margin: 10,
      });
    }

    // --- Build Edges ---
    // Connect the nodes based on heap logic
    for (let i = 0; i < heapData.length; i++) {
      let leftChildIndex = 2 * i + 1;
      let rightChildIndex = 2 * i + 2;

      // If the left child exists, draw an edge
      if (leftChildIndex < heapData.length) {
        edges.push({
          from: i, // From the parent (index i)
          to: leftChildIndex, // To the left child
          arrows: 'to',
          color: { color: '#95a5a6' },
        });
      }

      // If the right child exists, draw an edge
      if (rightChildIndex < heapData.length) {
        edges.push({
          from: i, // From the parent (index i)
          to: rightChildIndex, // To the right child
          arrows: 'to',
          color: { color: '#95a5a6' },
        });
      }
    }

    // --- Create Graph (same as before) ---
    const data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {
      layout: {
        hierarchical: {
          direction: 'UD', // Up-Down
          sortMethod: 'directed',
          levelSeparation: 70,
          nodeSpacing: 120,
        },
      },
      physics: { enabled: false },
    };

    const network = new Network(containerRef.current, data, options);

  }, [heapData]); // Re-run when heapData array changes

  // We can reuse the 'tree-container' ID for styling
  return <div id="tree-container" ref={containerRef} />;
}

export default HeapDisplay;