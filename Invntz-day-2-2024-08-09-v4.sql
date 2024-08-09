CREATE TABLE "production"(
    "production_id" INT NOT NULL,
    "product_id" INT NOT NULL,
    "quantity" INT NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "production_date" DATE NOT NULL,
    "manufacturer_id" INT NOT NULL,
    "product_cost_per_unit" DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    "production" ADD CONSTRAINT "production_production_id_primary" PRIMARY KEY("production_id");
CREATE TABLE "product"(
    "product_id" VARCHAR(255) NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_type" VARCHAR(255) NOT NULL,
    "material_id" INT NOT NULL,
    "passport_id" INT NOT NULL,
    "product_crm_ref" VARCHAR(255) NOT NULL,
    "product_cost_per_unit" DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    "product" ADD CONSTRAINT "product_product_id_primary" PRIMARY KEY("product_id");
CREATE TABLE "passport"(
    "passport_id" INT NOT NULL,
    "user_id" INT NOT NULL
);
ALTER TABLE
    "passport" ADD CONSTRAINT "passport_passport_id_primary" PRIMARY KEY("passport_id");
CREATE TABLE "sales"(
    "sales_id" VARCHAR(255) NOT NULL,
    "product_id" VARCHAR(255) NOT NULL,
    "initial_sales_price" DECIMAL(8, 2) NOT NULL,
    "final_sales_price" DECIMAL(8, 2) NOT NULL,
    "customer_id" VARCHAR(255) NOT NULL,
    "quantity" INT NOT NULL,
    "payment_id" BIGINT NOT NULL,
    "sales_date" DATE NOT NULL
);
ALTER TABLE
    "sales" ADD CONSTRAINT "sales_sales_id_primary" PRIMARY KEY("sales_id");
CREATE TABLE "material"(
    "material_ID" INT NOT NULL,
    "material_Name" VARCHAR(255) NOT NULL,
    "stock_Level" BIGINT NOT NULL,
    "material_cost_per_unit" BIGINT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "sustainability_type" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "material" ADD CONSTRAINT "material_material_id_primary" PRIMARY KEY("material_ID");
CREATE TABLE "design"(
    "design_id" VARCHAR(255) NOT NULL,
    "name_of_design" VARCHAR(255) NOT NULL,
    "product_id" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "design" ADD CONSTRAINT "design_design_id_primary" PRIMARY KEY("design_id");
CREATE TABLE "manufacturer"(
    "manufacturer_id" INT NOT NULL,
    "manufacturer_Name" VARCHAR(255) NOT NULL,
    "material_id" INT NOT NULL,
    "sustainability_type" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "manufacturer" ADD CONSTRAINT "manufacturer_manufacturer_id_primary" PRIMARY KEY("manufacturer_id");
CREATE TABLE "user"(
    "user_id" INT NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "user_surname" VARCHAR(255) NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "user_password" VARCHAR(255) NOT NULL,
    "user_type" VARCHAR(255) NOT NULL,
    "royalties" INT NOT NULL
);
ALTER TABLE
    "user" ADD CONSTRAINT "user_user_id_primary" PRIMARY KEY("user_id");
CREATE TABLE "shipping_details"(
    "shipping_id" BIGINT NOT NULL,
    "shipping_address" VARCHAR(255) NOT NULL,
    "user_id" INT NOT NULL
);
ALTER TABLE
    "shipping_details" ADD CONSTRAINT "shipping_details_shipping_id_primary" PRIMARY KEY("shipping_id");
CREATE TABLE "news_feed"(
    "news_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "news_title" VARCHAR(255) NOT NULL,
    "user_comments" VARCHAR(255) NOT NULL,
    "like_count" INT NOT NULL,
    "product_link" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "news_feed" ADD CONSTRAINT "news_feed_news_id_primary" PRIMARY KEY("news_id");
CREATE TABLE "transaction"(
    "payment_id" INT NOT NULL,
    "payment_status" VARCHAR(255) NOT NULL,
    "user_id" INT NOT NULL,
    "sale_id" INT NOT NULL,
    "payment_date" DATE NOT NULL
);
ALTER TABLE
    "transaction" ADD CONSTRAINT "transaction_payment_id_primary" PRIMARY KEY("payment_id");
ALTER TABLE
    "production" ADD CONSTRAINT "production_manufacturer_id_foreign" FOREIGN KEY("manufacturer_id") REFERENCES "manufacturer"("manufacturer_id");
ALTER TABLE
    "product" ADD CONSTRAINT "product_passport_id_foreign" FOREIGN KEY("passport_id") REFERENCES "passport"("passport_id");
ALTER TABLE
    "production" ADD CONSTRAINT "production_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "product"("product_id");
ALTER TABLE
    "sales" ADD CONSTRAINT "sales_payment_id_foreign" FOREIGN KEY("payment_id") REFERENCES "transaction"("payment_id");
ALTER TABLE
    "shipping_details" ADD CONSTRAINT "shipping_details_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("user_id");
ALTER TABLE
    "product" ADD CONSTRAINT "product_material_id_foreign" FOREIGN KEY("material_id") REFERENCES "material"("material_ID");
ALTER TABLE
    "manufacturer" ADD CONSTRAINT "manufacturer_material_id_foreign" FOREIGN KEY("material_id") REFERENCES "material"("material_ID");
ALTER TABLE
    "sales" ADD CONSTRAINT "sales_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "product"("product_id");
ALTER TABLE
    "design" ADD CONSTRAINT "design_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "product"("product_id");
ALTER TABLE
    "news_feed" ADD CONSTRAINT "news_feed_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("user_id");
ALTER TABLE
    "passport" ADD CONSTRAINT "passport_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("user_id");