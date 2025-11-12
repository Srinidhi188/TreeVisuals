package com.example.treevisualizer;

import java.util.List;

import org.springframework.stereotype.Service;

/**
 * This class holds the entire tree and its logic.
 * @Service tells Spring to create ONE instance of this class (a "singleton").
 * This means we will only have ONE tree in our application.
 */
@Service
public class BinaryTreeService {

    // This is the root node of our one and only tree
    public TreeNode root;

    // When the service is created, the tree starts empty
    public BinaryTreeService() {
        this.root = null;
    }

    /**
     * This is the public method we will call to add a new value.
     * It calls the private "recursive" method to find the correct spot.
     */
    public void insert(int value) {
        // This will update our 'root' field with the new tree structure
        this.root = insertRecursive(this.root, value);
    }

    /**
     * This is the private recursive function that does the real work.
     * It travels down the tree to find the correct empty spot.
     */
    private TreeNode insertRecursive(TreeNode currentNode, int value) {
        
        // Base case: If the current node is null, we found the spot!
        // Create a new node and return it.
        if (currentNode == null) {
            return new TreeNode(value);
        }

        // Recursive step:
        // If the new value is smaller, go left.
        if (value < currentNode.value) {
            currentNode.left = insertRecursive(currentNode.left, value);
        
        // If the new value is larger, go right.
        } else if (value > currentNode.value) {
            currentNode.right = insertRecursive(currentNode.right, value);
        }
        
        // If the value is equal, do nothing (no duplicates)

        // Return the (possibly modified) node back up the call chain
        return currentNode;
    }

    /**
     * A simple method to get the current state of the entire tree.
     */
    public TreeNode getTree() {
        return this.root;
    }
    /**
 * This is the new public method to build a new tree from an array.
 * It clears the old tree and inserts all new values.
 */
public void build(List<Integer> numbers) {
    // Clear the old tree
    this.root = null;

    // Insert each number from the list
    for (int value : numbers) {
        insert(value);
    }
}
    
}