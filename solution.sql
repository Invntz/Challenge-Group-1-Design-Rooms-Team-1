CREATE TABLE PRODUCTS (
    product_id INT PRIMARY KEY,
    gender VARCHAR(20),
    clothing_size VARCHAR(20),
    sustainability_rating VARCHAR(20), -- Changed INT(20) to VARCHAR(20)
    manufacturing_date DATE
);

INSERT INTO PRODUCTS (product_id, gender, clothing_size, sustainability_rating, manufacturing_date) VALUES (1, 'male', 'small', 'sustainable', '2024-04-01');
INSERT INTO PRODUCTS (product_id, gender, clothing_size, sustainability_rating, manufacturing_date) VALUES (2, 'female', 'medium', 'non-sustainable', '2023-11-23');
INSERT INTO PRODUCTS (product_id, gender, clothing_size, sustainability_rating, manufacturing_date) VALUES (3, 'male', 'large', 'mixed', '2022-07-17');

SELECT * FROM PRODUCTS;
