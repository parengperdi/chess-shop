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

    public List<Product> getAllProducts() {
        return repo.findAll();
    }
    public Product saveProduct(Product product) {
        return repo.save(product);
    }

    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteProduct(int id) {
         Product product = repo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Product not found with ID: " + id
                ));
        repo.delete(product);
    }
}
