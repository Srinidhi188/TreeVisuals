// src/components/HeapControls.jsx
import { useState } from 'react';
import './HeapControls.css'; // We'll use the same CSS

// We now accept 'onBuild' and 'onDelete'
function HeapControls({ onBuild, onDelete }) {
  // State for the new array input
  const [arrayString, setArrayString] = useState('');
  const [deleteVal, setDeleteVal] = useState('');

  const handleBuildClick = () => {
    onBuild(arrayString); // Call the build function
    setArrayString('');   // Clear the array box
  };

  const handleDeleteClick = () => {
    if (deleteVal === '') return;
    onDelete(deleteVal);
    setDeleteVal('');
  };

  return (
    <div className="multi-controls-container">

      {/* --- Build Controls --- */}
      <div className="controls-group">
        <label htmlFor="heap-build">Array:</label>
        <input
          type="text" // Changed to text
          id="heap-build"
          value={arrayString}
          onChange={(e) => setArrayString(e.target.value)}
          placeholder="e.g., 50, 20, 70"
        />
        <button onClick={handleBuildClick} className="insert-btn-heap">
          Update
        </button>
      </div>

      {/* --- Delete Controls (Unchanged) --- */}
      <div className="controls-group">
        <label htmlFor="heap-delete">Value:</label>
        <input
          type="number"
          id="heap-delete"
          value={deleteVal}
          onChange={(e) => setDeleteVal(e.target.value)}
          placeholder="Enter value to delete"
        />
        <button onClick={handleDeleteClick} className="delete-btn-heap">
          Delete
        </button>
      </div>

    </div>
  );
}

export default HeapControls;