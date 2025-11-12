// // // src/components/Controls.jsx
// // import { useState } from 'react'; // Import useState
// // import './Controls.css';

// // // We now accept a prop called 'onInsert'
// // function Controls({ onInsert }) {
// //   // Create a state to hold the value of the input box
// //   const [value, setValue] = useState('');

// //   const handleClick = () => {
// //     if (value === '') return;
// //     onInsert(value); // Call the function passed from App
// //     setValue(''); // Clear the input box
// //   };

// //   // src/components/Controls.jsx

// // // ... (keep the import and function definition)

// //   return (
// //     <div className="controls-container">
// //       <label htmlFor="bst-input">Value:</label> {/* 1. Add label */}
// //       <input
// //         type="number"
// //         id="bst-input" 
// //         value={value} 
// //         onChange={(e) => setValue(e.target.value)}
// //         placeholder="Enter a value"
// //       />
// //       <button onClick={handleClick}>Insert</button> {/* 3. Change button text */}
// //     </div>
// //   );
// // }

// // export default Controls;

// // src/components/Controls.jsx
// import { useState } from 'react';
// import './Controls.css'; // We will update this file next

// // We now accept 'onInsert' and a new 'onDelete' function
// function Controls({ onInsert, onDelete }) {
//   // Create separate states for each input box
//   const [insertVal, setInsertVal] = useState('');
//   const [deleteVal, setDeleteVal] = useState('');

//   const handleInsertClick = () => {
//     if (insertVal === '') return;
//     onInsert(insertVal); // Call the insert function
//     setInsertVal('');    // Clear the insert box
//   };

//   const handleDeleteClick = () => {
//     if (deleteVal === '') return;
//     onDelete(deleteVal); // Call the new delete function
//     setDeleteVal('');    // Clear the delete box
//   };

//   return (
//     // We wrap everything in a main container
//     <div className="multi-controls-container">
      
//       {/* --- Insert Controls --- */}
//       <div className="controls-group">
//         <label htmlFor="bst-insert">Value:</label>
//         <input
//           type="number"
//           id="bst-insert"
//           value={insertVal}
//           onChange={(e) => setInsertVal(e.target.value)}
//           placeholder="Enter value to insert"
//         />
//         <button onClick={handleInsertClick} className="insert-btn">
//           Insert
//         </button>
//       </div>

//       {/* --- Delete Controls --- */}
//       <div className="controls-group">
//         <label htmlFor="bst-delete">Value:</label>
//         <input
//           type="number"
//           id="bst-delete"
//           value={deleteVal}
//           onChange={(e) => setDeleteVal(e.target.value)}
//           placeholder="Enter value to delete"
//         />
//         <button onClick={handleDeleteClick} className="delete-btn">
//           Delete
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Controls;

// src/components/Controls.jsx
import { useState } from 'react';
import './Controls.css'; // We'll use the same CSS

// We now accept 'onBuild' and 'onDelete'
function Controls({ onBuild, onDelete }) {
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
        <label htmlFor="bst-build">Array:</label>
        <input
          type="text" // Changed to text
          id="bst-build"
          value={arrayString}
          onChange={(e) => setArrayString(e.target.value)}
          placeholder="e.g., 50, 20, 70"
        />
        <button onClick={handleBuildClick} className="insert-btn">
          Update
        </button>
      </div>

      {/* --- Delete Controls (Unchanged) --- */}
      <div className="controls-group">
        <label htmlFor="bst-delete">Value:</label>
        <input
          type="number"
          id="bst-delete"
          value={deleteVal}
          onChange={(e) => setDeleteVal(e.target.value)}
          placeholder="Enter value to delete"
        />
        <button onClick={handleDeleteClick} className="delete-btn">
          Delete
        </button>
      </div>

    </div>
  );
}

export default Controls;