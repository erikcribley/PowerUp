
USE `project3`;
INSERT INTO `users` (`userEmail`, `userPassword`)
VALUE
('mitch83083@gmail.com', '1234');

USE `project3`;
INSERT INTO `taskList` (`userId`, `task`)
VALUE
(9, 'Testing user 1'),
(9, 'still testing user 1'),
(9, '3rd test for user 1'),
(9, 'Testing user 2'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 test'),
(9, 'User 2 3rd test value');

USE `project3`;
INSERT INTO `upgradeType` (`upgradeType`)
VALUE
('thrust'),
('armor'),
('shield'),
('lasers');

USE `project3`;
INSERT INTO `defaultShip` (`attack`, `defense`, `speed`, `maxHP`, `name`, `picture`)
VALUE
(10, 10, 10, 50, 'Outpost Cruiser', './images/cruiser-sm.svg'),
(10, 10, 10, 50, 'Alien Pod', './images/pod.svg'),
(10, 10, 10, 50, 'Android Sphere', './images/sphere.svg');
