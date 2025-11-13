
import { useState, useEffect } from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Controls from './components/Controls';
import TreeDisplay from './components/TreeDisplay';
import HeapControls from './components/HeapControls';
import HeapDisplay from './components/HeapDisplay';
import ThemeToggle from './components/ThemeToggle'; // 1. Import the toggle

// // API URLs for our Java backend
const BST_API_URL = 'http://localhost:8080/api/tree';
const HEAP_API_URL = 'http://localhost:8080/api/heap';
// API URLs
// const BASE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
// const BST_API_URL = `${BASE_API_URL}/api/tree`;
// const HEAP_API_URL = `${BASE_API_URL}/api/heap`;
function App() {
  const [mode, setMode] = useState('bst');
  const [treeData, setTreeData] = useState(null);
  const [heapData, setHeapData] = useState([]);

  // 2. Add state for Dark Mode
  // We check localStorage to see if the user had a preference
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  // 3. Add effect to update the <body> class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save preference
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save preference
    }
  }, [isDarkMode]); // Re-run this when isDarkMode changes

  // 4. Function to pass to the toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // --- Generic Fetch Functions ---
  const fetchTree = (url, setter) => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const data = text ? JSON.parse(text) : null;
        setter(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const fetchHeap = (url, setter) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setter(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
  
  // --- BST Functions ---
  const handleBstBuild = (arrayString) => {
    fetch(`${BST_API_URL}/build`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: arrayString,
    })
      .then((response) => response.text())
      .then((text) => {
        const data = text ? JSON.parse(text) : null;
        setTreeData(data);
      })
      .catch((error) => console.error('Error building BST:', error));
  };
  
  const handleBstDelete = (value) => {
    fetchTree(`${BST_API_URL}/delete?value=${value}`, setTreeData);
  };

  // --- Heap Functions ---
  const handleHeapBuild = (arrayString) => {
    fetch(`${HEAP_API_URL}/build`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: arrayString,
    })
      .then((response) => response.json())
      .then((data) => {
        setHeapData(data);
      })
      .catch((error) => console.error('Error building heap:', error));
  };
  
  const handleHeapApiCall = (endpoint, value, setter) => {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: value, 
    })
      .then((response) => response.json())
      .then((data) => {
        setter(data);
      })
      .catch((error) => console.error('Error calling heap API:', error));
  };

  const handleHeapDelete = (value) => {
    handleHeapApiCall(`${HEAP_API_URL}/delete`, value, setHeapData);
  };

  // This effect loads the initial data
  useEffect(() => {
    if (mode === 'bst') {
      fetchTree(BST_API_URL, setTreeData);
    } else if (mode === 'heap') {
      fetchHeap(HEAP_API_URL, setHeapData);
    }
  }, [mode]);

  return (
    <>
      {/* 5. Add the toggle component */}
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <h1>Binary Tree Visualizer</h1>
      
      <Navigation mode={mode} setMode={setMode} />

      {mode === 'bst' ? (
        // --- BST MODE ---
        <>
          <Controls onBuild={handleBstBuild} onDelete={handleBstDelete} />
          <TreeDisplay treeData={treeData} />
        </>
      ) : (
        // --- HEAP MODE ---
        <>
          <HeapControls onBuild={handleHeapBuild} onDelete={handleHeapDelete} />
          <HeapDisplay heapData={heapData} />
        </>
      )}
    </>
  );
}

export default App;