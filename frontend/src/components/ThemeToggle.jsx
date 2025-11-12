// src/components/ThemeToggle.jsx
import './ThemeToggle.css';

// It takes the current theme (isDarkMode) and the function to change it (toggleTheme)
function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
}

export default ThemeToggle;