const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Backend Server provides: id, title, synopsis
// Frontend expects id name synopsis

app.get('/rest/shows', (req, res) => res.send([
	{
		id: 'black-mirror',
		title: 'Black Mirror',
		synopsis: 'An antology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.'
	},
	{
		id: 'breakingBad',
		title: 'Breaking Bad',
		synopsis: 'A once loyal father and chemistry teacher, Walter White, turns to a life of crime due to developing stage 3 terminal lung cancer. He is told he has two years to live. ... Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy.'
	},
	{
		id: 'deathNote',
		title: 'Death Note',
		synopsis: 'Light Yagami (Tatsuya Fujiwara) is a normal, undistinguished college student -- that is, until he discovers an odd notebook lying on the ground. He soon discovers that the notebook has magic powers: If someone\'s name is written on it while the writer imagines that person\'s face, he or she will die. Intoxicated with his new godlike power, Light kills those he deems unworthy of life. But a mysterious detective known only as L (Ken\'ichi Matsuyama) becomes determined to put a stop to his reign.'
	},
	{
		id: 'gameofThrones',
		title: 'Game of Thrones',
		synopsis: ' A Game of Thrones takes place over the course of one year on or near the fictional continent of Westeros. The story begins when King Robert visits the northern castle Winterfell to ask Ned Stark to be his right-hand assistant, or Hand of the King.'
	},
	{
		id: 'deadWalkers',
		title: 'Dead Walkers',
		synopsis: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive. Sheriff Deputy Rick Grimes gets shot and falls into a coma. When awoken he finds himself in a Zombie Apocalypse. Not knowing what to do he sets out to find his family, after he\'s done that he gets connected to a group to become the leader. He takes charge and tries to help this group of people survive, find a place to live, and get them food. This show is all about survival, the risks, and the things you\'ll have to do to survive.'
	},
	{
		id: 'wire',
		title: 'Wire',
		synopsis: 'Set in Baltimore, this show centers around the city\'s inner-city drug scene. It starts as mid-level drug dealer, D\'Angelo Barksdale beats a murder rap. After a conversation with a judge, Det. James McNulty has been assigned to lead a joint homicide and narcotics team, in order to bring down drug kingpin Avon Barksdale.'
	}
]));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '<path-to-build-folder>', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));