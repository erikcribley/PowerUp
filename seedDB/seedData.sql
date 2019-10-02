
USE `project3`;
INSERT INTO `users` (`userEmail`, `userPassword`)
VALUE
('mitch83083@gmail.com', '1234');

USE `project3`;
INSERT INTO `taskList` (`userId`, `task`)
VALUE
('1', 'Testing things out');

USE `project3`;
INSERT INTO `upgradeType` (`upgradeType`)
VALUE
('thrust'),
('armor'),
('shield'),
('lasers');

USE `project3`;
INSERT INTO `defaultShip` (`attack`, `defense`, `speed`, `maxHP`, `name`)
VALUE
(10, 10, 10, 50, 'Starter Ship');
