CREATE database friends;
USE friends;

CREATE TABLE cast
(
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    coolness_points INT(10),
    attitude VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO cast (name, coolness_points, attitude)
VALUES 
    ("Rachel", 5, "blonde"),
    ("Joey", 9, "suave"),
    ("Ross", 0, "niceguy"),
    ("Monica", 7, "high-strung"),
    ("Chandler", 4, "jokester"),
    ("Phoebe", 4, "quirky");

SELECT * from cast;