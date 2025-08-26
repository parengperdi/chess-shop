package com.ferdi.shop.controller;

import com.ferdi.shop.dto.ProductCreateRequest;
import com.ferdi.shop.model.Product;
import com.ferdi.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @PostMapping(value = "/products", consumes = "multipart/form-data")
    public Product createProduct(@ModelAttribute ProductCreateRequest request) throws IOException {
        String uploadDir = System.getProperty("user.dir") + "/uploads";
        Files.createDirectories(Paths.get(uploadDir));
        // Handle file upload
        String imageUrl = null;
        if (request.getImage() != null && !request.getImage().isEmpty()) {
            String fileName = System.currentTimeMillis() + "_" + request.getImage().getOriginalFilename();
            Path filePath = Paths.get(uploadDir, fileName);
            request.getImage().transferTo(filePath.toFile());
            imageUrl = "/uploads/" + fileName;
        }

        // Map DTO to entity
        Product product = new Product();
        product.setName(request.getName());
        product.setBrand(request.getBrand());
        product.setPrice(request.getPrice());
        product.setCategory(request.getCategory());
        product.setQuantity(request.getQuantity());
        product.setRating(request.getRating());
        product.setNumberOfSales(request.getNumberOfSales());
        product.setImageUrl(imageUrl);

        return service.saveProduct(product);
    }

    // Delete a product by ID
    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable int id) {
        service.deleteProduct(id);
        return "Product with ID " + id + " deleted successfully.";
    }
}
