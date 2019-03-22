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