// src/components/Navigation.jsx
import './Navigation.css';

// This component takes the current 'mode' and a function 'setMode'
function Navigation({ mode, setMode }) {
  return (
    <nav className="app-nav">
      <button
        className={mode === 'bst' ? 'active' : ''}
        onClick={() => setMode('bst')}
      >
        Binary Search Tree
      </button>
      <button
        className={mode === 'heap' ? 'active' : ''}
        onClick={() => setMode('heap')}
      >
        Max Heap
      </button>
    </nav>
  );
}

export default Navigation;