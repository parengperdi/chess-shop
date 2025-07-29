package com.ferdi.shop.controller;

import com.ferdi.shop.model.Product;
import com.ferdi.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;

    // Health check
    @GetMapping("/")
    public String greet() {
        return "Landing";
    }

    // Get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // Get a single product by ID
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    // Create a new product
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }

    // Delete a product by ID
    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
        return "Product with ID " + id + " deleted successfully.";
    }
}
