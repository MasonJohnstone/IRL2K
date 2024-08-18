CREATE TABLE Rosters (
    team_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (team_id, user_id),
    FOREIGN KEY (team_id) REFERENCES Teams(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);