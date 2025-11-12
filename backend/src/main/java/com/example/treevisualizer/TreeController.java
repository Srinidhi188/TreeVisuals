package com.example.treevisualizer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * This is the "receptionist" for our API.
 * @RestController tells Spring this class will handle web requests.
 * @RequestMapping("/api/tree") makes all URLs start with /api/tree
 */
@RestController
@RequestMapping("/api/tree")
@CrossOrigin(origins = "*") // Allows any frontend to call this API
public class TreeController {

    // Spring's @Autowired magic automatically gives us the
    // one and only instance of our BinaryTreeService
    @Autowired
    private BinaryTreeService treeService;

    /**
     * This method handles GET requests to http://localhost:8080/api/tree
     * It just returns the current state of the tree.
     */
    @GetMapping
    public TreeNode getTree() {
        return treeService.getTree();
    }

    /**
     * This method handles POST requests.
     * e.g., http://localhost:8080/api/tree/insert?value=10
     * It takes the 'value' from the URL, tells the service to insert it,
     * and then returns the *new* state of the tree.
     */
    @GetMapping("/insert")
    public TreeNode insertNode(@RequestParam int value) {
        treeService.insert(value);
        return treeService.getTree();
    }
    /**
 * This method handles POST requests to build a new tree from an array string.
 */
@PostMapping("/build")
public TreeNode buildTree(@RequestBody String arrayString) {

    // Basic cleanup
    arrayString = arrayString.replace("[", "").replace("]", "").replace("\"", "");

    if (arrayString.isEmpty()) {
        treeService.build(new ArrayList<>()); // Build an empty tree
        return treeService.getTree();
    }

    try {
        // Parse the string into a list of numbers
        List<Integer> numbers = Arrays.stream(arrayString.split(","))
                                      .map(String::trim)
                                      .map(Integer::parseInt)
                                      .collect(Collectors.toList());

        // Tell the service to build the new tree
        treeService.build(numbers);

    } catch (NumberFormatException e) {
        // On error, just return the existing tree
    }
    return treeService.getTree(); // Return the new tree
}
}