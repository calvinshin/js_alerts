DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
    id INT NOT NULL auto_increment,
    title VARCHAR(60),
    artist VARCHAR(40),
    genre VARCHAR(30),
    PRIMARY KEY id
);

INSERT INTO songs (title, artist, genre)
VALUES ("Livin' on a Prayer", "Bon Jovi", "Rock"), ("22", "Taylor Swift", "Pop"), ("Say Yes", "Taylor Swift", "Pop"), ("YES OR YES", "Twice", "Pop"),
("What is Love?", "Twice", "KPOP"), ("Shallow", "Lady Gaga", "Pop");