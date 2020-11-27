CREATE DATABASE damian_goodwin
CREATE TABLE recipes
(
    recipe_id BIGSERIAL PRIMARY KEY,
    admin_name VARCHAR(255),
    admin_password VARCHAR,
    title VARCHAR NOT NULL,
    ingredients VARCHAR NOT NULL,
    directions VARCHAR NOT NULL,
    img_name VARCHAR NOT NULL,
    img BYTEA
);


 






        