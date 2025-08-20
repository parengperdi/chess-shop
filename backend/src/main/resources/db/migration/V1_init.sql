CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'USER', -- e.g. ADMIN or USER
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20),
    address TEXT,
    profile_picture_url VARCHAR(500),
    status VARCHAR(50) DEFAULT 'ACTIVE', -- ACTIVE / SUSPENDED
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    release_date DATE,
    quantity INT NOT NULL,
    rating DOUBLE DEFAULT 0,
    number_of_sales INT DEFAULT 0,
    image_url VARCHAR(500) DEFAULT '/uploads/default.png'
);