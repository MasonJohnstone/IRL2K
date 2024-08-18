CREATE TABLE Games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mode INT NOT NULL,
    phase INT NOT NULL,
    home INT,
    away INT,
    start DATETIME,
    finish DATETIME,
    winner INT,
    loser INT
);