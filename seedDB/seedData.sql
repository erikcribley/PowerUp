
USE `project3`;
INSERT INTO `users` (`userEmail`, `userPassword`)
VALUE
('mitch83083@gmail.com', '1234');

USE `project3`;
INSERT INTO `taskList` (`userId`, `task`)
VALUE
(1, 'Testing user 1'),
(1, 'still testing user 1'),
(1, '3rd test for user 1'),
(2, 'Testing user 2'),
(2, 'User 2 test'),
(2, 'User 2 3rd test value');

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
