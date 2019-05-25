/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declerations of globally used var's
var player_one_name = document.querySelector('#name-0');
var player_two_name = document.querySelector('#name-1');

var player_one = document.querySelector('#current-0');
var player_two = document.querySelector('#current-1');

var player_one_score = document.querySelector('#score-0');
var player_two_score = document.querySelector('#score-1');

var img = document.querySelector('.dice');

var btn;

var player_one_total = 0;
var player_two_total;

//Intialization of globally declared var's
img.style.display = 'none';

player_one_score.textContent = 0;
player_two_score.textContent = 0;

player_one.textContent = 0;
player_two = 0;

player_one_name.textContent = "kazim";
player_two_name.textContent = 'Server';

btn = document.querySelector('.btn-roll').addEventListener('click', function(){
	var rand_num = player_one.textContent = Math.floor(Math.random()*6)+1;	
	var temp;
	img.style.display = 'block';
	img.src = 'dice-'+rand_num+'.png';
	player_one_total = player_one_total + rand_num;
	player_one_score.textContent = player_one_total;
	if (rand_num === 1) {
		img.style.display = 'none';
	}
});









