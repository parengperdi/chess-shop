package com.ferdi.shop.controller;

import com.ferdi.shop.dto.ProductCreateRequest;
import com.ferdi.shop.model.Product;
import com.ferdi.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;

    // Health check
    @GetMapping("/landing")
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
    @PostMapping(value = "/products", consumes = "multipart/form-data")
    public Product createProduct(@ModelAttribute ProductCreateRequest request) throws IOException {
        return service.createProduct(request);
    }

    // Delete a product by ID
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Object> deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }


    //Toggle product active status
    @PutMapping("/products/{id}/toggle")
    public ResponseEntity<Product> toggleProductStatus(@PathVariable int id) {
        Product updatedProduct = service.toggleProductStatus(id);
        return ResponseEntity.ok(updatedProduct);
    }

    // @PutMapping(value = "/products/{id}", consumes = "multipart/form-data")
    // public ResponseEntity<Product> updateProduct(
    //           @PathVariable int id,
    //           @ModelAttribute ProductCreateRequest request
    // ) throws IOException {
    //     Product updatedProduct = service.updateProduct(id, request);
    //     return ResponseEntity.ok(updatedProduct);
    // }
    
}
