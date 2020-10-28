-- Create a new table called 'TableName' in schema 'SchemaName'
-- Drop the table if it already exists
-- IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
-- DROP TABLE SchemaName.TableName
-- GO
-- Create the table in the specified schema
CREATE TABLE recipes (
    recipe_id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR NOT NULL,
    ingredients VARCHAR NOT NULL,
    directions VARCHAR NOT NULL,
    video_url VARCHAR NOT NULL
);


 






        