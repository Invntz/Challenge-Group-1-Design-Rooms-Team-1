CREATE TABLE SHIPPING_DETAILS (
    shipping_id INT PRIMARY KEY,
    user_id VARCHAR(20),
    shipping_address VARCHAR(50)
);

INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (1, 'abc', 'N1C 4AG');
INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (2, 'xyz', 'EC2A 2FA');
INSERT INTO SHIPPING_DETAILS (shipping_id, user_id, shipping_address) VALUES (3, 'def', 'W3B 3BE');

SELECT * FROM SHIPPING_DETAILS;

