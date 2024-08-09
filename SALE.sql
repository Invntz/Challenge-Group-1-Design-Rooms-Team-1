CREATE TABLE SALES (
    sales_id INT PRIMARY KEY,
    product_id VARCHAR(20),
    initial_sales_price DECIMAL(10,2),
    final_sales_price DECIMAL(10,2),
    customer_id VARCHAR(20),
    quantity INT,
    payment_id INT,
    sales_date DATE
);

INSERT INTO SALES (sales_id, product_id, initial_sales_price, final_sales_price, customer_id, quantity, payment_id, sales_date)
VALUES (1, 'pr001', 15.00, 10.00, 'JohnDoe', 2, 1001, '2024-04-05');

INSERT INTO SALES (sales_id, product_id, initial_sales_price, final_sales_price, customer_id, quantity, payment_id, sales_date)
VALUES (2, 'pe002', 20.00, 15.00, 'Doe', 3, 1002, '2020-05-09');

SELECT * FROM SALES;






