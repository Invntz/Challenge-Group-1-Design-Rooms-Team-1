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


