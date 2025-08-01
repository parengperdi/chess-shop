ALTER TABLE shop ADD rating DOUBLE DEFAULT 0;
ALTER TABLE shop ADD number_of_sales INT DEFAULT 0;
ALTER TABLE shop ADD image_url VARCHAR(255);

UPDATE shop SET rating = 4.5, number_of_sales = 20 WHERE id = 1;