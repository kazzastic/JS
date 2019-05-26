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
var flag; 

var player_one_total = 0;
var player_two_total = 0;

//Intialization of globally declared var's
img.style.display = 'none';

player_one_score.textContent = 0;
player_two_score.textContent = 0;

player_one.textContent = 0;
player_two.textContent = 0;

player_one_name.textContent = "kazim";
player_two_name.textContent = 'Server';

flag = false;

//wokring of DOM
btn = document.querySelector('.btn-roll').addEventListener('click', function(){
	if (flag == false){	
		var rand_num_one = player_one.textContent = Math.floor(Math.random()*6)+1;	
		if(rand_num_one !== 1){
			img.style.display = 'block';
			img.src = 'dice-'+rand_num_one+'.png';
			player_one_total = player_one_total + rand_num_one;
			player_one.textContent = player_one_total;
			win();
		}
		else{
			img.style.display = 'none';
			player_one.textContent = 0;
			player_one_score.textContent = player_one_total;
			flag = true;
			nextplayer();
			win();
		}
	}
	else{
		var rand_num_two = player_two.textContent = Math.floor(Math.random()*6)+1;	
		if(rand_num_two !== 1){
			img.style.display = 'block';
			img.src = 'dice-'+rand_num_two+'.png';
			player_two_total = player_two_total + rand_num_two;
			player_two.textContent = player_two_total;
			win();
		}
		else{
			img.style.display = 'none';
			player_two.textContent = 0;
			player_two_score.textContent = player_two_total;
			flag = false;
			nextplayer();
			win();
		}
	}
});

function nextplayer(){

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');


}


//New button DOM
document.querySelector('.btn-new').addEventListener('click', function(){
	player_one.textContent = 0;
	player_one_score.textContent = 0;
	player_one_total = 0;

	player_two.textContent = 0;
	player_two_score.textContent = 0;
	player_two_total = 0;

	img.style.display = 'none';

});

//Hold button DOM
document.querySelector('.btn-hold').addEventListener('click', function(){
	if(flag == false){
		img.style.display = 'none';
		player_one.textContent = 0;
		player_one_score.textContent = player_one_total;
		flag = true;
		player_one_score.textContent = player_one_total;
		nextplayer();
		win();
	}
	else{
		img.style.display = 'none';
		player_two.textContent = 0;
		player_two_score.textContent = player_two_total;
		flag = false
		player_two_score.textContent = player_two_total;
		nextplayer();
		win();
	}
});

function win(){	
	if (player_one_total >=100 || player_two_total >= 100){
		if(player_one_total > player_two_total){
			player_one_name.textContent = 'this nigga win';
			return;
		}
		else {
			player_two_name.textContent = 'this nigga lost';
			return;
		}
	}
	else{
		console.log('nothing');
		return;
	}
}






