package com.ferdi.shop.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@Table(name = "shop")
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String brand;
    private BigDecimal price;
    private String category;
    private Date releaseDate;
    private int quantity;
    private double rating;
    private int numberOfSales;
    private boolean active = true;
    private String imageUrl = "/uploads/default.png";
}
