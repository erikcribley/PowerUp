DROP DATABASE IF EXISTS `project3`;

CREATE DATABASE `project3`;

USE `project3`;
DROP TABLE IF EXISTS `taskList`;
DROP TABLE IF EXISTS `playerShip`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` INT AUTO_INCREMENT NOT NULL,
  `userEmail` VARCHAR(100) NOT NULL UNIQUE,
  `userPassword` VARCHAR(150),
  `googleId` VARCHAR(100),
  `userCreation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
);

USE `project3`;
DROP TABLE IF EXISTS `taskList`;
CREATE TABLE `taskList` (
  `taskId` INT AUTO_INCREMENT NOT NULL,
  `userId` INT NOT NULL,
  `taskCredit` INT(10) NOT NULL,
  `task` TEXT NOT NULL,
  `taskCreation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taskId`),
  CONSTRAINT `FK_001` FOREIGN KEY `fkIdx_001` (`userId`)
  REFERENCES `users` (`userId`)
);

USE `project3`;
DROP TABLE IF EXISTS `startingTasks`;
CREATE TABLE `startingTasks` (
  `taskCredit` INT(10) NOT NULL,
  `task` TEXT NOT NULL
);

USE `project3`;
DROP TABLE IF EXISTS `playerShip`;
CREATE TABLE `playerShip` (
  `shipId` INT AUTO_INCREMENT NOT NULL,
  `userId` INT NOT NULL UNIQUE,
  `attack` INT(10) NOT NULL,
  `defense` INT(10) NOT NULL,
  `speed` INT(10) NOT NULL,
  `maxHP` INT(10) NOT NULL,
  `credits` INT(10) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`shipId`),
  CONSTRAINT `FK_002` FOREIGN KEY `fkIdx_002` (`userId`)
  REFERENCES `users` (`userId`)
  );

USE `project3`;
DROP TABLE IF EXISTS `defaultShip`;
CREATE TABLE `defaultShip` (
  `defaultShipId` INT AUTO_INCREMENT NOT NULL,
  `attack` INT(10) NOT NULL,
  `defense` INT(10) NOT NULL,
  `speed` INT(10) NOT NULL,
  `maxHP` INT(10) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`defaultShipId`)
);

USE `project3`;
DROP TABLE IF EXISTS `upgrades`;
CREATE TABLE `upgrades` (
  `upgradeId` INT AUTO_INCREMENT NOT NULL,
  `upgradeType` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `bonus` INT(10) NOT NULL,
  `cost` INT(10) NOT NULL,
  `damage` INT(10),
  PRIMARY KEY (`upgradeId`)
);

USE `project3`;
DROP TABLE IF EXISTS `prompts`;
CREATE TABLE `prompts` (
  `promptId` INT AUTO_INCREMENT NOT NULL,
  `prompt` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `option1` TEXT NOT NULL,
  `option2` TEXT NOT NULL,
  `event1` TEXT NOT NULL,
  `event2` TEXT NOT NULL,
  `param1` TEXT NOT NULL,
  `param2` TEXT NOT NULL,
  `image` TEXT NOT NULL,
  PRIMARY KEY (`promptId`)
);
