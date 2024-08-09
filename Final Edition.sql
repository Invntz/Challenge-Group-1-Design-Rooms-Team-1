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

------------------------

CREATE TABLE MANUFACTURER (
    manufacturer_id INT PRIMARY KEY,
    manufacturer_Name VARCHAR(20),
    material_id VARCHAR(20),
    sustainability_type VARCHAR(20),
    location VARCHAR(20)
);

INSERT INTO MANUFACTURER (manufacturer_id, manufacturer_Name, material_id, sustainability_type, location)
VALUES (1, 'Ariaprene', '001', 'sustainable', 'Taiwan');

INSERT INTO MANUFACTURER (manufacturer_id, manufacturer_Name, material_id, sustainability_type, location)
VALUES (2, 'BoltThreads', '002', 'non-sustainable', 'USA');

INSERT INTO MANUFACTURER (manufacturer_id, manufacturer_Name, material_id, sustainability_type, location)
VALUES (3, 'Vollebak', '003', 'mixed', 'UK');

SELECT * FROM MANUFACTURER;

------------------------

CREATE TABLE MATERIAL (
    material_id INT PRIMARY KEY,
    material_name VARCHAR(20),
    stock_level VARCHAR(20),
    cost_per_unit DECIMAL(10,2), -- Changed to DECIMAL for accurate monetary values
    location VARCHAR(20),
    sustainability_type VARCHAR(20)
);

INSERT INTO MATERIAL (material_id, material_name, stock_level, cost_per_unit, location, sustainability_type) VALUES (1, 'Mycelium', 'in-stock', 5.00, 'Taiwan', 'sustainable');
INSERT INTO MATERIAL (material_id, material_name, stock_level, cost_per_unit, location, sustainability_type) VALUES (2, 'Bamboo', 'out-of-stock', 6.00, 'USA', 'non-sustainable');
INSERT INTO MATERIAL (material_id, material_name, stock_level, cost_per_unit, location, sustainability_type) VALUES (3, 'Hemp', 'in-stock', 4.00, 'UK', 'mixed sustainable');
INSERT INTO MATERIAL (material_id, material_name, stock_level, cost_per_unit, location, sustainability_type) VALUES (4, 'Tencel', 'out-of-stock', 7.00, 'UK', 'sustainable'); -- Changed material_id to 4 to avoid duplicate

SELECT * FROM MATERIAL;

------------------------

CREATE TABLE SHIPPING_DETAILS (
    shipping_id INT PRIMARY KEY,
    user_id VARCHAR(20),
    shipping_address VARCHAR(50)
);

INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (1, 'abc', 'N1C 4AG');
INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (2, 'xyz', 'EC2A 2FA');
INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (3, 'def', 'W3B 3BE');

SELECT * FROM SHIPPING_DETAILS;

------------------------

CREATE TABLE DESIGN (
    design_id INT PRIMARY KEY,
    name_of_design VARCHAR(20),
    product_id INT -- Changed product_id to INT
);

INSERT INTO DESIGN (design_id, name_of_design, product_id)
VALUES (1, 'design01', 'shoe');

INSERT INTO DESIGN (design_id, name_of_design, product_id)
VALUES (2, 'design02', 'trouser');

INSERT INTO DESIGN (design_id, name_of_design, product_id)
VALUES (3, 'design03', 'shirt');

SELECT * FROM DESIGN;

------------------------

CREATE TABLE PRODUCTION (
    production_id INT PRIMARY KEY,
    product_id VARCHAR(20),
    quantity INT,
    status VARCHAR(20),
    production_date DATE,
    manufacturer_id VARCHAR(20),
    production_cost_per_unit DECIMAL(10,2)
);

INSERT INTO PRODUCTION (production_id, product_id, quantity, status, production_date, manufacturer_id, production_cost_per_unit)
VALUES (1, 'ml-sh01-123', 6, 'in-transit', '2024-04-05', 'Taiwan', 12.99);

INSERT INTO PRODUCTION (production_id, product_id, quantity, status, production_date, manufacturer_id, production_cost_per_unit)
VALUES (2, 'fl-tr02-123', 4, 'placed-order', '2023-11-22', 'USA', 18.50);

SELECT * FROM PRODUCTION;

