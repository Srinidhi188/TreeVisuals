// src/components/TreeDisplay.jsx
import { useEffect, useRef } from 'react'; // Import hooks
import { Network } from 'vis-network'; // Import Vis.js
import './TreeDisplay.css';

// We now accept a prop called 'treeData'
function TreeDisplay({ treeData }) {
  // Create a 'ref' to the div. This is the React way to get a DOM element
  const containerRef = useRef(null);

  // This 'useEffect' hook runs every time 'treeData' changes
  useEffect(() => {
    if (!containerRef.current || !treeData) {
      // If we have no data or no container, do nothing
      // (We could clear the tree here if we wanted)
      return;
    }

    // --- This is the same Vis.js logic from before ---

    const nodes = [];
    const edges = [];

    function traverse(node, parentId) {
      if (!node) return;
      const nodeId = node.value;

      nodes.push({
        id: nodeId,
        label: String(nodeId),
        font: { size: 24, color: '#333' },
        color: { background: '#ffffff', border: '#3498db' },
        shape: 'box',
        margin: 10,
      });

      if (parentId !== null) {
        edges.push({
          from: parentId,
          to: nodeId,
          arrows: 'to',
          color: { color: '#95a5a6' },
        });
      }
      traverse(node.left, nodeId);
      traverse(node.right, nodeId);
    }

    traverse(treeData, null); // Start from the root

    const data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {
      layout: {
        hierarchical: {
          direction: 'UD', // Down-Up
          sortMethod: 'directed',
          levelSeparation: 70,
          nodeSpacing: 120,
        },
      },
      physics: { enabled: false },
    };

    // Create the network and attach it to our 'ref'
    const network = new Network(containerRef.current, data, options);

  }, [treeData]); // The hook's "dependency array" - it re-runs when treeData changes

  // Pass the 'ref' to the div
  return <div id="tree-container" ref={containerRef} />;
}

export default TreeDisplay;