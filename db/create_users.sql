DELIMITER //
CREATE PROCEDURE addUser(
    IN userEmail VARCHAR(255),
    IN userPassword VARCHAR(255),
    IN userType VARCHAR(255),
    IN userActive TINYINT
)
BEGIN
    INSERT INTO users (email, password, type, active)
    VALUES (userEmail, userPassword, userType, userActive);
END //
DELIMITER ;
