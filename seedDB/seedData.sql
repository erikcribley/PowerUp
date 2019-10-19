
USE `project3`;
INSERT INTO `startingTasks` (`taskCredit`, `task`)
VALUE
(3, 'Then you can use power to advance through the game!'),
(3, 'Each time you complete a task you gain power.'),
(3, 'Start by creating a task of your own!');

USE `project3`;
INSERT INTO `defaultShip` (`attack`, `defense`, `speed`, `maxHP`, `name`, `picture`)
VALUE
(10, 10, 10, 50, 'Outpost Cruiser', './images/cruiser-sm.svg'),
(10, 10, 10, 50, 'Alien Pod', './images/pod.svg'),
(10, 10, 10, 50, 'Android Sphere', './images/sphere.svg'),
(10, 10, 10, 50, 'Cyborg Craft', './images/craft.svg');

USE `project3`;
INSERT INTO `prompts` (`prompt`, `description`, `option1`, `option2`, `event1`, `event2`, `param1`, `param2`, `image`)
VALUES
	(
		"You've recieved a distress signal from a nearby asteroid.", 
        "1 -- Initial prompt",
        "Respond", 
        "Ignore",
        "loadPrompt",
		"loadPrompt",
        "2", 
        "3",
        "placeholder.jpg"
	),
    (
		"It's an ambush, You're attacked by space pirates!",
        "2 -- Respond to distress signal",
        "Engage",
        "Flee",
		"loadPrompt",
		"loadPrompt",
        "4",
        "5",
        "placeholder.jpg"
	),
    (
		"Fuck that noise",
		"3 -- ignore that shit",
        "fly away",
        "faster",
		"loadPrompt",
		"loadPrompt",
        "99",
        "99",
        "placeholder.jpg"
	),
    (
		"Engage",
        "4 -- engage",
        "attack",
        "raise shields",
        "attack",
        "defend",
        "x",
        "x",
        "placeholder.jpg"
	),
    (
		"Take evasive action",
        "5 -- flee enemy ship",
        "use thrust",
        "conserve power",
        "flee",
        "flee",
        "x",
        "0",
        "placeholder.jpg"
	),
    (
		"DIRECT HIT!, Enemy vessel is returning fire.",
        "6 -- hit, return fire",
        "Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0",
        "placeholder.jpg"
	),
	(
		"DIRECT HIT!, Enemey vessel is heavily damaged and fleeing",
        "7 -- hit, enemy flees",
        "Pursue",
        "Ignore",
        "loadPrompt",
        "loadPrompt",
        "17",
        "99",
        "placeholder.jpg"
	),
    (
		"DIRECT HIT! Enemy vessel destroyed",
        "8 -- hit, enemy destroyed",
        "Salvage",
        "Ignore",
        "loadPrompt",
        "loadPrompt",
        "20",
        "99",
        "placeholder.jpg"
    ),
    (
		"MISS! Enemy vessel is returning fire!",
        "9 -- miss, return fire",
		"Raise Shield",
        "Conserve Power",
        "defend",
        "defend",
        "x",
        "0",
        "placeholder.jpg"
	),
        (
		"Enemy fires, and misses",
        "10 --enemy missed",
		"return fire",
        "flee",
        "attack",
        "thrust",
        "x",
        "x",
        "placeholder.jpg"
	),
	(
		"Enemy hits, you've taken light damage",
        "11 -- hit, severe damage",
		    "Return Fire",
        "Flee",
        "attack",
        "thrust",
        "x",
        "x",
        "placeholder.jpg"
	),
	(
		    "Enemy hits, you've taken severe damage",
        "12 -- hit, severe damage",
		    "Return fire",
        "Flee",
        "attack",
        "thrust",
        "0",
        "0",
        "placeholder.jpg"
	),
	(
		    "Enemy hits, your ship is destroyed",
        "13 -- hits, destroyed",
		    "Restart",
        "exit",
        "restart",
        "exit",
        "x",
        "x",
        "placeholder.jpg"
	),
  (
		    "You've ran out of credits. Ship is disabled",
        "14 -- credits === 0",
        "Restart",
        "exit",
        "restart",
        "exit",
        "x",
        "x",
        "placeholder.jpg"
	),
  (
	    	"Evasion failed, enemy ship in pursuit",
        "15 -- enemy pursuit",
		    "attack",
        "raise shields",
        "attack",
        "defend",
        "x",
        "x",
        "placeholder.jpg"
	),
    (
		    "Evasion successful",
        "16 -- evaded enemy ship",
        "something",
        "something else",
        "loadPrompt",
        "loadPrompt",
		    "99",
        "99",
        "placeholder.jpg"
	),
    (
		    "Pursue enemy ship",
        "17 -- pursue enemy ship",
        "use thrust",
        "conserve power",
        "pursue",
        "pursue",
        "x",
        "0",
        "placeholder.jpg"
	),
  (
		    "Enemy ship has escaped",
        "18 -- enemy ship escapes",
		    "something",
        "something else",
        "loadPrompt",
        "loadPrompt",
		    "99",
        "99",
        "placeholder.jpg"
	),
	(
		    "Enemy ship in range",
        "19 -- successful pursuit",
        "attack",
        "something else",
        "attack",
        "loadPrompt",
        "x",
        "99",
        "placeholder.jpg"
	),
   (
		    "Salvage",
        "20 -- get upgrades from destroyed ship",
        "upgrade weapon",
        "upgrade thrust",
        "upgrade",
        "upgrade",
        "weapon",
        "thrust",
        "placeholder.jpg"
	),
   (
		    "Weapon upgraded",
        "21 -- weapon upgrade",
        "something",
        "something else",
        "loadPrompt",
        "loadPrompt",
        "99",
        "99",
        "placeholder.jpg"
	),
  (
	    	"Thrust upgraded",
        "22 -- thrust upgrade",
        "something",
        "something else",
        "loadPrompt",
        "loadPrompt",
        "99",
        "99",
        "placeholder.jpg"
	);
    