DROP DATABASE IF EXISTS `project3`;

CREATE DATABASE `project3`;

USE `project3`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` INT AUTO_INCREMENT NOT NULL,
  `userName` VARCHAR(45) NOT NULL UNIQUE,
  `userPassword` VARCHAR(150) NOT NULL,
  `userCreation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
);

DROP TABLE IF EXISTS `taskList`;
CREATE TABLE `taskList` (
  `taskId` INT AUTO_INCREMENT NOT NULL,
  `userId` INT NOT NULL,
  `task` TEXT NOT NULL,
  `taskCreation` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taskId`),
  CONSTRAINT `FK_001` FOREIGN KEY `fkIdx_001` (`userId`)
  REFERENCES `users` (`userId`)
);

DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `characterId` INT AUTO_INCREMENT NOT NULL,
  `userId` INT NOT NULL,
  `experience` INT(10) NOT NULL,
  `level` INT(10) NOT NULL,
  `charAtk` INT(10) NOT NULL,
  
  )
)
