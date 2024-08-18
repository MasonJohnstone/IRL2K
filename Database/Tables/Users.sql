CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(24) NOT NULL,
    nickname VARCHAR(12) NOT NULL,
    password_hash VARCHAR(64) NOT NULL,
    solo_elo DECIMAL(10, 2) NOT NULL,
    pickup_elo DECIMAL(10, 2) NOT NULL
);