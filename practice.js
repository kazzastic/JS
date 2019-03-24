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















































