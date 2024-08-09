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


