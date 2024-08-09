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


