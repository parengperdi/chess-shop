package com.ferdi.shop.service;

import com.ferdi.shop.dto.ProductCreateRequest;
import com.ferdi.shop.exception.ResourceNotFoundException;
import com.ferdi.shop.model.Product;
import com.ferdi.shop.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ferdi.shop.service.FileStorageService;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepo repo;
    private final FileStorageService fileStorageService;

    
    public ProductService(ProductRepo repo, FileStorageService fileStorageService) {
        this.repo = repo;
        this.fileStorageService = fileStorageService;
    }

    // Get all products
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // Get all active products
    public List<Product> getActiveProducts() {
    return repo.findByActiveTrue(); 
    }

    // Create a product
    public Product createProduct(ProductCreateRequest request) throws IOException {
           String imageUrl = null;
        if (request.getImage() != null && !request.getImage().isEmpty()) {
            imageUrl = fileStorageService.saveFile(request.getImage());
        }

        Product product = new Product();
        product.setName(request.getName());
        product.setBrand(request.getBrand());
        product.setPrice(request.getPrice());
        product.setCategory(request.getCategory());
        product.setQuantity(request.getQuantity());
        product.setRating(0);
        product.setNumberOfSales(0);
        product.setActive(true);
        product.setImageUrl(imageUrl);

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
