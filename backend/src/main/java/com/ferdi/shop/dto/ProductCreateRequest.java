package com.ferdi.shop.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Getter
@Setter
public class ProductCreateRequest {
    private String name;
    private String brand;
    private BigDecimal price;
    private String category;
    private int quantity;
    private double rating;
    private int numberOfSales;
    private boolean active;
    private MultipartFile image;
}