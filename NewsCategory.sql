CREATE TABLE NewsCategory ( -- Changed table name to NewsCategory for clarity
    news_category_id INT PRIMARY KEY,
    news_category_name VARCHAR(20)
);

INSERT INTO NewsCategory (news_category_id, news_category_name) VALUES (1, 'Trending');
INSERT INTO NewsCategory (news_category_id, news_category_name) VALUES (2, 'Emerging Tech');

SELECT * FROM NewsCategory;




