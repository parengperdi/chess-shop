package com.ferdi.shop.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
public class ProductCreateRequest {
    private String name;
    private String brand;
    private BigDecimal price;
    private String category;
    private Date releaseDate;
    private int quantity;
    private double rating;
    private int numberOfSales;
    private MultipartFile image;
}