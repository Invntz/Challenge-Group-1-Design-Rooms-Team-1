CREATE TABLE "Production"(
    "Production_Batch_ID" VARCHAR(255) NOT NULL,
    "Product_ID" VARCHAR(255) NOT NULL,
    "Quantity" BIGINT NOT NULL,
    "Status" VARCHAR(255) NOT NULL,
    "Production_Date" BIGINT NOT NULL,
    "Manufacturer_ID" VARCHAR(255) NOT NULL,
    "Product_Cost" BIGINT NOT NULL
);
ALTER TABLE
    "Production" ADD CONSTRAINT "production_production_batch_id_primary" PRIMARY KEY("Production_Batch_ID");
CREATE TABLE "Product"(
    "Product_ID" BIGINT NOT NULL,
    "Product_Name" VARCHAR(255) NOT NULL,
    "Product_Type" VARCHAR(255) NOT NULL,
    "User_ID" BIGINT NOT NULL,
    "Material_ID" BIGINT NOT NULL,
    "Passport_ID" BIGINT NOT NULL,
    "Product_CRM_Ref" VARCHAR(255) NOT NULL,
    "Product_Cost" BIGINT NOT NULL
);
ALTER TABLE
    "Product" ADD CONSTRAINT "product_product_id_primary" PRIMARY KEY("Product_ID");
CREATE TABLE "Sales"(
    "Sales_ID" VARCHAR(255) NOT NULL,
    "Product_ID" VARCHAR(255) NOT NULL,
    "Sales_Price" BIGINT NOT NULL,
    "Final_Price" BIGINT NOT NULL,
    "Customer_ID" VARCHAR(255) NOT NULL,
    "Quantity" BIGINT NOT NULL
);
ALTER TABLE
    "Sales" ADD CONSTRAINT "sales_sales_id_primary" PRIMARY KEY("Sales_ID");
CREATE TABLE "Material"(
    "Material_ID" VARCHAR(255) NOT NULL,
    "Material_Name" VARCHAR(255) NOT NULL,
    "Stock_Level" BIGINT NOT NULL,
    "Cost_Per_Unit" BIGINT NOT NULL,
    "Location" VARCHAR(255) NOT NULL,
    "Sustainability_Type" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Material" ADD CONSTRAINT "material_material_id_primary" PRIMARY KEY("Material_ID");
CREATE TABLE "Design"(
    "Design_ID" VARCHAR(255) NOT NULL,
    "Design_Name" VARCHAR(255) NOT NULL,
    "Product_ID" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Design" ADD CONSTRAINT "design_design_id_primary" PRIMARY KEY("Design_ID");
CREATE TABLE "Manufacturer"(
    "Manufacturer_ID" VARCHAR(255) NOT NULL,
    "Manufacturer_Name" VARCHAR(255) NOT NULL,
    "Material_ID" VARCHAR(255) NOT NULL,
    "Sustainabiliy_Type" VARCHAR(255) NOT NULL,
    "Location" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Manufacturer" ADD CONSTRAINT "manufacturer_manufacturer_id_primary" PRIMARY KEY("Manufacturer_ID");
CREATE TABLE "User"(
    "User_ID" BIGINT NOT NULL,
    "User_Name" VARCHAR(255) NOT NULL,
    "User_Surname" VARCHAR(255) NOT NULL,
    "User_Email" VARCHAR(255) NOT NULL,
    "User_Password" VARCHAR(255) NOT NULL,
    "User_Type" BIGINT NOT NULL,
    "Loyality_Points" BIGINT NOT NULL
);
ALTER TABLE
    "User" ADD CONSTRAINT "user_user_id_primary" PRIMARY KEY("User_ID");
CREATE TABLE "Customer"(
    "Customer_ID" VARCHAR(255) NOT NULL,
    "Customer_Name" VARCHAR(255) NOT NULL,
    "Customer_Surname" BIGINT NOT NULL,
    "Shipping Address" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Customer" ADD CONSTRAINT "customer_customer_id_primary" PRIMARY KEY("Customer_ID");
ALTER TABLE
    "Production" ADD CONSTRAINT "production_manufacturer_id_foreign" FOREIGN KEY("Manufacturer_ID") REFERENCES "Manufacturer"("Manufacturer_ID");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_material_id_foreign" FOREIGN KEY("Material_ID") REFERENCES "Material"("Material_ID");
ALTER TABLE
    "Manufacturer" ADD CONSTRAINT "manufacturer_material_id_foreign" FOREIGN KEY("Material_ID") REFERENCES "Material"("Material_ID");
ALTER TABLE
    "Customer" ADD CONSTRAINT "customer_customer_id_foreign" FOREIGN KEY("Customer_ID") REFERENCES "User"("User_ID");
ALTER TABLE
    "Sales" ADD CONSTRAINT "sales_product_id_foreign" FOREIGN KEY("Product_ID") REFERENCES "Product"("Product_ID");
ALTER TABLE
    "Design" ADD CONSTRAINT "design_product_id_foreign" FOREIGN KEY("Product_ID") REFERENCES "Product"("Product_ID");
ALTER TABLE
    "Production" ADD CONSTRAINT "production_product_id_foreign" FOREIGN KEY("Product_ID") REFERENCES "Product"("Product_ID");
ALTER TABLE
    "Product" ADD CONSTRAINT "product_user_id_foreign" FOREIGN KEY("User_ID") REFERENCES "User"("User_ID");
ALTER TABLE
    "Sales" ADD CONSTRAINT "sales_customer_id_foreign" FOREIGN KEY("Customer_ID") REFERENCES "Customer"("Customer_ID");