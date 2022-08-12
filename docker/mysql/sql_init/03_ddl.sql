CREATE DATABASE
    IF NOT EXISTS sample_schema CHARACTER SET utf8 COLLATE utf8_general_ci;

USE sample_schema;

CREATE TABLE
    IF NOT EXISTS sample_schema.user(
        id int PRIMARY KEY AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        age VARCHAR(3),
        mailaddress varchar(30) NOT NULL,
        todo varchar(250),
        INDEX(id)
    );