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





