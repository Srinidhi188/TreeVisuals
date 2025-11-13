# 🌳 TreeVisuals: A Full-Stack DSA Visualizer

## 🚀 Live Demo

**[Click here to view the live application](https://treevisuals-production.up.railway.app)**

This is a full-stack web application that visualizes two common tree-based data structures: a **Binary Search Tree (BST)** and a **Max Heap**. It features a Java Spring Boot backend that manages the DSA logic and a modern React frontend that provides a dynamic, interactive visualization.

This project was built to demonstrate a clear understanding of data structures, backend API development, and modern frontend frameworks.

---

## ✨ Features

* **Dual Visualizers:** Toggle between a Binary Search Tree and a Max Heap.
* **Full-Stack Architecture:** A stateful Java backend serves a dynamic React frontend.
* **BST Operations:**
    * **Build from Array:** Create a new BST from a comma-separated list of numbers.
    * **Delete Node:** Remove any node from the tree, with the visualization handling all three deletion cases (0, 1, or 2 children).
* **Max Heap Operations:**
    * **Build from Array:** Create a new Max Heap, with the backend automatically "heapifying" the array.
    * **Delete Node:** Remove any value from the heap, with the structure re-heapifying automatically.
* **Dark/Light Mode:** A theme toggle that saves your preference in local storage.

---

## 🛠️ Tech Stack

* **Frontend:**
    * **React.js** (with Hooks)
    * **Vis.js** (for network graph visualization)
    * **CSS** (for custom styling and theme)
* **Backend:**
    * **Java 17**
    * **Spring Boot** (for the REST API)
    * **Maven** (for dependency management)

---

## 🚀 How to Run Locally

This project is a monorepo containing two separate applications. You must run both at the same time.

### 1. Run the Backend (Java)

1.  Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Run the Spring Boot application using the Maven wrapper:
    ```bash
    # On Windows
    .\mvnw.cmd spring-boot:run
    
    # On Mac/Linux
    ./mvnw spring-boot:run
    ```
    The backend server will start on **`http://localhost:8080`**.

### 2. Run the Frontend (React)

1.  Open a **new, separate terminal**.
2.  Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
3.  Install the required `node_modules`:
    ```bash
    npm install
    ```
4.  Start the React development server:
    ```bash
    npm run dev
    ```
    The frontend application will start on **`http://localhost:5173`**.

5.  Open **`http://localhost:5173`** in your browser to use the application.
