
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
INSERT INTO `prompts` (`prompt`, `description`, `option1`, `option2`, `event1`, `event2`, `param1`, `param2`)
VALUES
	(
		"You've recieved a distress signal from a nearby asteroid.", 
        "1 -- Initial prompt",
        "Respond", 
        "Ignore",
        "loadPrompt",
		"loadPrompt",
        "2", 
        "3"
	),
    (
		"It's an ambush, You're attacked by space pirates!",
        "2 -- Respond to distress signal",
        "Engage",
        "Flee",
		"loadPrompt",
		"loadPrompt",
        "4",
        "5"
	),
    (
		"Fuck that noise",
		"3 -- ignore that shit",
        "fly away",
        "faster",
		"loadPrompt",
		"loadPrompt",
        "69",
        "68"
	),
    (
		"Engage",
        "4 -- engage",
        "attack",
        "raise shields",
        "attack",
        "defend",
        "x",
        "x"
	),
    (
		"Super runaway",
        "5 - GTFO",
        "run",
        "faster",
        "thrust",
        "thrust",
        "x",
        "x"
	),
    (
		"DIRECT HIT!, Enemy vessel is returning fire.",
        "6 -- hit, return fire",
        "Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	),
	(
		"DIRECT HIT!, Enemey vessel is heavily damaged and fleeing",
        "7 -- hit, enemy flees",
        "Pursue",
        "Ignore",
        "thrust",
        "loadPrompt",
        "x",
        "10"
	),
    (
		"DIRECT HIT! Enemy vessel destroyed",
        "8 -- hit, enemy destroyed",
        "Salvage",
        "Ignore",
        "loadPrompt",
        "loadPrompt",
        "11",
        "12"
    ),
    (
		"MISS! Enemy vessel is returning fire!",
        "9 -- miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	),
        (
		"MISSED",
        "10 --miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	),
	(
		"light damage",
        "11 -- miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	),
	(
		"severe damage",
        "12 -- miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	),
	(
		"DEAD",
        "13 -- miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0"
	);