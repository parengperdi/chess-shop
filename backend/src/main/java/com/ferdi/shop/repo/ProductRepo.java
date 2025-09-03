package com.ferdi.shop.repo;

import com.ferdi.shop.model.Product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo  extends JpaRepository<Product, Integer> {
    List<Product> findByActiveTrue();
}
