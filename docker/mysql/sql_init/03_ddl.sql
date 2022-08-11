CREATE DATABASE
    IF NOT EXISTS user_schema CHARACTER SET utf8 COLLATE utf8_general_ci;

USE user_schema;

CREATE TABLE
    IF NOT EXISTS user_schema.users(
        id int PRIMARY KEY AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        age VARCHAR(3),
        mailaddress varchar(30) NOT NULL,
        password varchar(10) NOT NULL,
        INDEX(id)
    );