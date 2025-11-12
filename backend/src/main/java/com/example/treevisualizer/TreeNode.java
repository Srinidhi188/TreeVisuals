package com.example.treevisualizer;

/**
 * This class defines what a single node in our Binary Tree looks like.
 * The web server will automatically convert this class into JSON
 * for the frontend to understand.
 */
public class TreeNode {

    public int value;
    public TreeNode left;
    public TreeNode right;

    // A "constructor" to create a new node with a specific value
    public TreeNode(int value) {
        this.value = value;
        this.left = null; // When a node is new, it has no children
        this.right = null;
    }

    // --- Getters and Setters ---
    // These are required by Spring Boot to read the values
    // and send them to the frontend as JSON.

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public TreeNode getLeft() {
        return left;
    }

    public void setLeft(TreeNode left) {
        this.left = left;
    }

    public TreeNode getRight() {
        return right;
    }

    public void setRight(TreeNode right) {
        this.right = right;
    }
}