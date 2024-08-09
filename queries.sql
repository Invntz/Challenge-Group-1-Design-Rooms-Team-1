
-- create
CREATE TABLE PRODUCTS (
    product_id INT PRIMARY KEY,
    gender VARCHAR(20),
    clothing_size VARCHAR(20),
    sustainability_rating INT(20),
    manufacturing_date DATE(20)
);
-- insert
INSERT INTO  product_id (product_id, gender,clothing_size,sustainability_rating, manufacturing_date) VALUES (1, 'male', 'small', 'sustainable', '01-04-2024', )
INSERT INTO product_id (product_id, gender, clothing_size, sustainability_rating, manufacturing_date) VALUES (2, 'female', 'medium', 'non-sustainable', '23-11-2023')
INSERT INTO product_id (product_id, gender, clothing_size, sustainability_rating, manufacturing_date) VALUES (3, 'male','large', 'mixed', '17-07-2022')