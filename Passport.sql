CREATE TABLE Passport ( -- Changed table name to NewsCategory for clarity
    passport_id INT PRIMARY KEY,
    user_id VARCHAR(20)
);

INSERT INTO Passport (passport_id, user_id) VALUES (1, 'abc');
INSERT INTO Passport (passport_id, user_id) VALUES (2, 'xyz');

SELECT * FROM Passport;




