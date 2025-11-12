package com.example.treevisualizer;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class HeapService {

    // This list holds the state of our heap
    private List<Integer> heap;

    public HeapService() {
        // Start with an empty heap
        this.heap = new ArrayList<>();
    }

    // A simple getter for the controller
    public List<Integer> getHeap() {
        return this.heap;
    }

    // --- Insert Logic ---
    public void insert(int value) {
        heap.add(value);        // Add to the end
        heapifyUp(heap.size() - 1); // Sift it up to its correct spot
    }

    private void heapifyUp(int index) {
        int parentIndex = (index - 1) / 2;
        // While we are not the root and we are larger than our parent
        while (index > 0 && heap.get(index) > heap.get(parentIndex)) {
            // Swap with parent
            swap(index, parentIndex);
            
            // Move up to the parent's index
            index = parentIndex;
            parentIndex = (index - 1) / 2;
        }
    }

    // --- Delete Logic ---
    public void delete(int value) {
        int index = heap.indexOf(value);
        if (index == -1) {
            return; // Value not found
        }

        // Swap the node to delete with the last node
        int lastIndex = heap.size() - 1;
        swap(index, lastIndex);

        // Remove the last node (which is the value we wanted to delete)
        heap.remove(lastIndex);

        // Now, we must re-heapify from the 'index' we swapped into.
        // The swapped node could be > or < its new children,
        // so we must try to heapify up AND down.
        if (index < heap.size()) {
            heapifyUp(index);    // Try sifting up
            maxHeapify(heap, heap.size(), index); // Try sifting down
        }
    }
     // This is the new public method to build from an array
public void build(List<Integer> numbers) {
    // Replace the old heap with the new numbers
    this.heap = new ArrayList<>(numbers);
    // Call the helper to turn it into a valid heap
    buildMaxHeap();
}

// This helper function (the for loop) builds the heap
private void buildMaxHeap() {
    int n = this.heap.size();
    // Start from the last non-leaf node and heapify down
    for (int i = (n / 2) - 1; i >= 0; i--) {
        // Call the maxHeapify method that *already exists* in this file
        maxHeapify(this.heap, n, i);
    }
}
    // --- Helper Methods ---
    private void swap(int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }

    // This is our 'sift-down' method from before
    private void maxHeapify(List<Integer> numbers, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && numbers.get(left) > numbers.get(largest)) {
            largest = left;
        }

        if (right < n && numbers.get(right) > numbers.get(largest)) {
            largest = right;
        }

        if (largest != i) {
            // Swap (using the service's list)
            int temp = numbers.get(i);
            numbers.set(i, numbers.get(largest));
            numbers.set(largest, temp);

            // Recurse
            maxHeapify(numbers, n, largest);
        }
    }
}