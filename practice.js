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
