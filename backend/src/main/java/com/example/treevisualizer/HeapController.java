package com.example.treevisualizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/heap")
@CrossOrigin(origins = "*") // Allows React frontend to call
public class HeapController {

    // Spring's @Autowired gives us the one and only instance of our HeapService
    @Autowired
    private HeapService heapService;

    /**
     * This method handles GET requests to http://localhost:8080/api/heap
     * It just returns the current state of the heap.
     */
    @GetMapping
    public List<Integer> getHeap() {
        return heapService.getHeap();
    }

    /**
     * This method handles POST requests to insert a new node.
     * We use @RequestBody so we can send the number in the request body.
     */
    @PostMapping("/insert")
    public List<Integer> insertNode(@RequestBody int value) {
        heapService.insert(value);
        return heapService.getHeap(); // Return the new heap structure
    }

    /**
     * This method handles POST requests to delete a node.
     */
    @PostMapping("/delete")
    public List<Integer> deleteNode(@RequestBody int value) {
        heapService.delete(value);
        return heapService.getHeap(); // Return the new heap structure
    }
    /**
 * This method handles POST requests to build a new heap from an array string.
 */
@PostMapping("/build")
public List<Integer> buildHeap(@RequestBody String arrayString) {

    // Basic cleanup
    arrayString = arrayString.replace("[", "").replace("]", "").replace("\"", "");

    if (arrayString.isEmpty()) {
        heapService.build(new ArrayList<>()); // Build an empty heap
        return heapService.getHeap();
    }

    try {
        // Parse the string into a list of numbers
        List<Integer> numbers = Arrays.stream(arrayString.split(","))
                                      .map(String::trim)
                                      .map(Integer::parseInt)
                                      .collect(Collectors.toList());

        // Tell the service to build the new heap
        heapService.build(numbers);

    } catch (NumberFormatException e) {
        // On error, just return the existing heap
    }
    return heapService.getHeap(); // Return the new heap
}
}