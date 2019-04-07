function assert(value, desc){
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results");
	document.getElementById("results").appendChild(li);
}


var helloing = (() => "Hello You People!");

((arg1, arg2) => {
	console.log("Hello Shameer");
	console.log("Another hello");
	console.log(arg1+arg2);
})(4,5);

var func_exp = ((arg1, arg2) => {
	console.log("Hello Shameer Server");
	console.log("Another Another hello");
	console.log(arg1+arg2);
})(5,5)

var not_self_invoking = (arg1, arg2 ) => {
	console.log("Hello There not_self_invoking function");
	console.log("Breath in the atmostphere");
	return arg1 + arg2;
}
function whatevs(a,b,c){
	assert(a === 1, 'the value of a is 1');
	assert(b === 2, 'the value of a is 2');
	assert(c === 3, 'the value of a is 3');

	assert(arguments.length === 5, 'we have passed 5 arguments');

	assert(arguments[0] === a, 'The first argument is assigned to a');
	assert(arguments[1] === b, 'The second argument is assigned to b');
	assert(arguments[2] === c, 'The third argument is assigned to c');
	assert(arguments[3] === 4,'We can access the fourth argument');
	assert(arguments[4] === 5,'We can access the fifth argument');
}
function sum(){
	var sum = 0;
	var i;
	for(i=0; i <= arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}
//uncomment if want to check the sum()
/*assert(sum(1,2)===3, "Bhai yeh daikho 3 answer");
assert(sum(2,3) === 5, "kaya apny arguments dally thay function banaty waqt no!");
assert(sum(10,10)===20, "tu bohut mast kaam karta hia ray!");*/

function add(...args){
	let result = 0;
	for(let arg of args) result += arg;
	return result;
}
console.log(add(1,2,3,4,100));

/*function infiltrate(person){
	assert(person === 'gardner', 'the person is a gardner');	//simple initialized stuff pretty basic
	assert(person === arguments[0], 'the first arg is gardner');	//the first arg is what we initialized

	arguments[0] = 'ninja';	//an array operation here and reinitialized the first index value
	assert(person === 'ninja', 'the person is a ninja now');	
	assert(person === arguments[0], 'arg 1 is ninja now!');

	person = 'gardner';		//this shows how affecting the varaible person alsp affects the arg[0] indexd value truely incredible
	assert(person === 'gardner', 'the person is a gardner again');
	assert(person === arguments[0], 'first arg is now gardner');
}*/
//"use strict";
function infiltrate(person){
	if(person === 'gardner'){
		console.log("the person is a gardner");
	}
	if(person === arguments[0]){
		console.log("this is first arguments gardner");
	}
	arguments[0] = 'ninja';
	if(person === 'ninja'){
		console.log("the person is ninja now!");
	}
	if(person === arguments[0]){
		console.log("First arg is ninja now!");
	}
	person = 'gardner';
	if(person === 'gardner'){
		console.log("its gardner again");
	}
	if(person === arguments[0]){
		console.log("first arg is gardner again");
	}
}
function whatsContext(){
	return this;
}
assert(whatsContext() === window, "Function call on Window");

var getMyThis = whatsContext;
assert(getMyThis() === window, "Another function call on the window");

var ninja1 = {
	getMyThis : whatsContext	
};
assert(ninja1.getMyThis() === window, "Working with 1st ninja");

function Ninja(){
	this.skulk = function(){
		return this;
	};
}
var ninja1 = new Ninja();
var ninja2 = new Ninja();

assert(ninja1.skulk === ninja1, "first ninja is skulking");
assert(ninja2.skulk === ninja2, "second ninja is skulking");

var puppet = {
	rules : false
};
function Emperor(){
	this.rules = true;
	return this.rules; //we can also return the puppet function as well
}
var emperor = new Emperor();

assert(emperor === puppet , "The emperor is merely a puppet");
assert(emperor.rules === false, "The puppet does not know how to rule");
console.log("anything");

function Button(){
	this.clicked = false;
	this.click = function(){
		this.clicked = true;
		assert(button.clicked, "The button was clicked");	
	};
}
var button = new Button();
var elem = document.getElementById("test");
elem.addEventListener("click", button.click);

function juggle(){
	var result = 0;
	var n;
	for(n = 0; n < arguments.length; n++){
		result += arguments[n];
	}
	this.result = result;
}
var bat1 = {};
var bat2 = {};

juggle.apply(bat1, [1,2,3,4]);
juggle.call(bat2, 5,6,7,8);

assert(bat1.result === 10, "juggle via apply");
assert(bat2.result === 26, "juggle via call");

var outerValue = "samurai";
var later;
function outerFunc(){
	var innerValue = "ninja";

	function innerFunc(){
		assert(outerValue === "samurai", "I can see the samurai");
		assert(innerValue === "ninja", "I can see the ninja");
	}

	later = innerFunc;
}
outerFunc();
later();

function outer(){
	var b = 10;
	function inner(){
		var a = 20;
		console.log(a+b);
	}
	return inner;
}
var X = outer();
var Y = outer();

function Ninja(){
	var feints = 0;
	this.getFeints = function(){
		return feints;
	};
	this.feint = function(){
		feints++;
	};
}
var Naruto_ninja1 = new Ninja();
Naruto_ninja1.feint();

assert(Naruto_ninja1.feints === undefined, "The privated data not accessable");
assert(Naruto_ninja1.getFeints() === 1, "We're able to access the internal feint count");

var Naruto_ninja2 = new Ninja();
assert(Naruto_ninja1.getFeints() === 0, "The second ninja object gets its own feints varaible");

function kazim(){
	var some = 10;
	var another = 20;
	this.Ali = function(){
		console.log("do somehting");	
	};
}
var kaz = new kazim();

function animateIT(elementId){
	var elem = document.getElementById(elementId);
	var tick = 0;
	var timer = setInterval(function(){
		if(tick < 100){
			elem.style.left = elem.style.top = tick + "px";
			tick++;
		}
		else{
			clearInterval(timer);
			assert(tick === 100, "Tick accessed via closure");
			assert(elem, "Element also accessed by closure");
			assert(timer, "Timer also accessed by closure");
		}
	}, 10);
}
animateIT("box1");

function skulk(ninja){
	report(ninja + "skulking");
}
function report(message){
	console.log(message);
}
skulk("Kuma");
skulk("Yoshi");

const firstConst = "Samuria";
assert(firstConst === "Samuria", "First const is a samurai");

try{
	firstConst = "Ninja";
	console.log("Should'nt be here");
}
catch(e){
	console.log("An exception has occured");
}
assert(firstConst === "Samuria", "First const is unchanged");
const secondConst = {};

secondConst.weapon = "wakizashi";
assert(secondConst.weapon === "wakizashi", "We can add new properties");

const thirdConst = [];
assert(thirdConst.length === 0, "No items in our array");
thirdConst.push("Yoshi");
assert(thirdConst.length === 1, "The array has changed");
/*
try{
	var shinobi = syncGetJSON("ninjas.json");
	var missions = syncGetJSON(shinobi[0].missionsUrl);
	var missionDetails = syncGetJSON(missions[0].detailsUrl);
}
catch(e){
	console.log("uho we cant find the your bloody mission deatisl");
}
getJSON("ninjas.json", function(err, ninjas){
	if(err){
		console.log("Error fetching list of the ninjas", err);
		return;
	}
	getJSON(ninja[0].missionUrl, function(err, 	missions){
		if(err){
			console.log("Error locating the ninjas", err);
			return;
		}
		getJSON(missions[0].detailsUrl, function(err, missionDetails){
			if(err){
				console.log("Error locating mission details", err);
				return;
			}
		});		
	});

});

async(function*(){
	try{
		const ninjas = yield getJSON("ninjas.json");
		const missions = yield getJSON(ninjas[0].missionsUrl);
		const missionDescription = yield getJSON(missions[0].details);
	}
	catch(e){
		console.log("cant fetch the information");
	}
});

//the cat example is being solved here
var cat = {
	Spot : "Cat #0"
};

cat.Spot = "Cat #1";
cat.Spot = "Cat #2";
*/
var UI = ["cat", "dog", "dogma", "tappu ky papa"];
UI.shift();
UI.unshift("ayeee", "Oyee");
UI.splice(0, 1, "kazim", "Ali");

/*var cityToCheck = prompt("Enter Your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCity = ["karachi", "lahore", "kashmir"];
var i;
for(i=0; i<3; i++){
	if(cityToCheck === cleanestCity[i]){
		console.log("aray wah");
		break;
	}
}*/

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var rightNow = new Date();
var theDay = rightNow.getDay();
var NameOfDay = dayNames[theDay];













