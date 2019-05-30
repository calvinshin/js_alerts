DROP DATABASE IF EXISTS universities_db;

CREATE DATABASE universities_db;

USE universities_db;

CREATE TABLE west(
    id INT NOT NULL auto_increment,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO west (name)
VALUES ("West"), ("CC Thing"), ("Other");

SELECT * FROM west;