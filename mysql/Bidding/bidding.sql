DROP DATABASE IF EXISTS bidding;

CREATE DATABASE bidding;

USE bidding;

CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(100),
    description VARCHAR(150),
    currentbid DECIMAL(18, 2),
    PRIMARY KEY (id)
)

INSERT INTO items (item, description, currentbid)
VALUES ("Water Bottle", "This is a water bottle. Almost trash.", 2.10),
("Gold Coin", "How much is this worth? I have no idea!", 100),
("Trash", "Literal garbage.", 0);