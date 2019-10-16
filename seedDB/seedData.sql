
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
INSERT INTO `defaultShip` (`attack`, `defense`, `speed`, `maxHP`, `name`, `picture`)
VALUE
(10, 10, 10, 50, 'Outpost Cruiser', './images/cruiser-sm.svg'),
(10, 10, 10, 50, 'Alien Pod', './images/pod.svg'),
(10, 10, 10, 50, 'Android Sphere', './images/sphere.svg'),
(10, 10, 10, 50, 'Cyborg Craft', './images/craft.svg');

//prompts
USE `project3`;
INSERT INTO `prompts` (`prompt`, `description`, `option1`, `option2`, `event1`, `event2`)
VALUES
	(
		"You've recieved a distress signal from a nearby asteroid.", 
        "1 -- Initial prompt",
        "Respond", 
        "Ignore",
        "props.loadPrompt(2)", 
        "props.loadPrompt(3)"
	),
    (
		"It's an ambush, You're attacked by space pirates!",
        "2 -- Respond to distress signal",
        "Engage",
        "Flee",
        "4",
        "5"
	),
    (
		"Fuck that noise",
		"3 -- ignore that shit",
        "fly away",
        "faster",
        "69",
        "68"
	),
    (
		"Engage",
        "4 -- engage",
        "attack",
        "raise shields",
        "6",
        "7"
	),
    (
		"Super runaway",
        "5 - GTFO",
        "run",
        "faster",
        "8",
        "9"
	);

