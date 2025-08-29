package com.ferdi.shop.service;

import com.ferdi.shop.exception.ResourceNotFoundException;
import com.ferdi.shop.model.Product;
import com.ferdi.shop.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    // Get all products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // Save a new product
    public Product saveProduct(Product product) {
        return repo.save(product);
    }

    // Get a single product by ID
    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    // Delete a product by ID
    public void deleteProduct(int id) {
         Product product = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Product not found with ID: " + id
                ));
        repo.delete(product);
    }

    // Toggle product active status
    public Product toggleProductStatus(int id) {
    Product product = repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found with ID: " + id));

    product.setActive(!product.isActive()); // Flip active/inactive
    return repo.save(product);
}
}
