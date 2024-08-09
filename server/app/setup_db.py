import sqlite3

# establish sqlite connection
connection = sqlite3.connect("sql_app.db")
# database object to interactive with the database
cursor = connection.cursor()

# SQL query created by Dhilan Thiyagarajah
sqlqueries = """
CREATE TABLE IF NOT EXISTS "user"(
    "user_id" INTEGER PRIMARY KEY,
    "user_name" VARCHAR(255) NOT NULL,
    "user_surname" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_password" VARCHAR(255) NOT NULL,
    "user_type" VARCHAR(255) NOT NULL,
    "royalties" INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS "product"(
    "product_id" INTEGER PRIMARY KEY,
    "product_name" VARCHAR(255) NOT NULL,
    "product_type" VARCHAR(255) NOT NULL,
    "material_id" INTEGER NOT NULL,
    "passport_id" INTEGER NOT NULL,
    "product_crm_ref" VARCHAR(255) NOT NULL,
    "product_cost_per_unit" DECIMAL(8, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS "production"(
    "production_bavarchartch_ID" INTEGER PRIMARY KEY,
    "product_id" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "production_date" DATE NOT NULL,
    "manufacturer_id" INTEGER NOT NULL,
    "product_cost_per_Unit" DECIMAL(8, 2) NOT NULL,
    FOREIGN KEY("product_id") REFERENCES "product"("product_id"),
    FOREIGN KEY("manufacturer_id") REFERENCES "manufacturer"("manufacturer_id")
);

CREATE TABLE IF NOT EXISTS "passport"(
    "passport_id" INTEGER PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    FOREIGN KEY("user_id") REFERENCES "user"("user_id")
);

CREATE TABLE IF NOT EXISTS "sales"(
    "sales_id" VARCHAR(255) PRIMARY KEY,
    "product_id" VARCHAR(255) NOT NULL,
    "initial_sales_price" DECIMAL(8, 2) NOT NULL,
    "final_sales_price" DECIMAL(8, 2) NOT NULL,
    "customer_id" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "payment_id" INTEGER NOT NULL,
    "sales_date" DATE NOT NULL,
    FOREIGN KEY("product_id") REFERENCES "product"("product_id")
);

CREATE TABLE IF NOT EXISTS "news_feed"(
    "news_id" INTEGER PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "news_title" VARCHAR(255) NOT NULL,
    "user_comments" VARCHAR(255) NOT NULL,
    "like_count" INTEGER NOT NULL,
    "product_link" VARCHAR(255) NOT NULL,
    FOREIGN KEY("user_id") REFERENCES "user"("user_id")

);

CREATE TABLE IF NOT EXISTS "material"(
    "material_id" VARCHAR(255) PRIMARY KEY,
    "material_Name" VARCHAR(255) NOT NULL,
    "stock_Level" INTEGER NOT NULL,
    "cost_per_unit" INTEGER NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "sustainability_type" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "design"(
    "design_id" VARCHAR(255) PRIMARY KEY,
    "name_of_design" VARCHAR(255) NOT NULL,
    "product_id" VARCHAR(255) NOT NULL,
    FOREIGN KEY("product_id") REFERENCES "product"("product_id")
);

CREATE TABLE IF NOT EXISTS "manufacturer"(
    "manufacturer_id" VARCHAR(255) PRIMARY KEY,
    "manufacturer_name" VARCHAR(255) NOT NULL,
    "material_id" VARCHAR(255) NOT NULL,
    "sustainability_type" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    FOREIGN KEY("material_id") REFERENCES "material"("material_ID")
);

CREATE TABLE IF NOT EXISTS "shipping_details"(
    "shipping_id" INTEGER PRIMARY KEY,
    "shipping_address" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    FOREIGN KEY("user_id") REFERENCES "user"("user_id")
);

CREATE TABLE IF NOT EXISTS "transaction"(
    "payment_id" INTEGER PRIMARY KEY,
    "payment_status" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "sale_id" INTEGER NOT NULL,
    "payment_date" DATE NOT NULL,
    FOREIGN KEY("user_id") REFERENCES "user"("user_id"),
    FOREIGN KEY("sale_id") REFERENCES "sales"("sales_id")
);
"""


cursor.executescript(sqlqueries)
# save any executed commands
connection.commit()
# close the database connection
connection.close()
