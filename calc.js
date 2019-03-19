var functionMap = {
	"addButton" : (a,b) => a+b,
	"subtractButton" : (a,b) => a-b,
	"multiplyButton" : (a,b) => a*b,
	"divideButton" : (a,b) => a/b
};

function Eval(stack){
	return functionMap [stack[1]](stack[0], stack[2]);
};

var stack=[];
var display = '';
var current;

$(function(){
	$(".digit").click(function(){
		if(stack.length == 1 || stack.length == 3){
			display = '';
			stack = [];
		}

		display += $(this).val();
		$("#display").val(Number(display));
		current = Number(display);

	});
	$("#clearButton").click(function(){
		stack = [];
		display = '';
		current = NaN;
		$("display").val(display);
	});

	$(".operator").click(function(){
		if(stack.length == 3){
			stack = [];
			stack.push(Number(display));
			stack.push(this.id);
		}
		else if(stack.length == 2){
			if(isNaN(current)){
				stack[1]=this.id;
			}
			else{
				stack.push(Number(display));
				display = Eval(stack);
				$("#display").val(display);
				stack = [display, this.id];
			}
		}
		else if(stack.length == 1){
			stack.push(this.id);
		}
		else{
			stack.push(Number(display));
			stack.push(this.id);
			display='';
		}
		current = NaN;
		display = '';
	});

	$("#equalsButton").click(function(){
		if(stack.length == 0){
			if(current){
				stack = [current];
			}
		}
		else if(stack.length == 2){
			if(!isNaN(current)){
				stack.push(Number(display));
				console.log(stack);
				display = Eval(stack);
				$("#display").val(display);
			}
		}
		else{
			stack[0] = display;
			display = Eval(stack);
			$("#display").val(display);
		}
	});
});

function Click_me(){
	var number;
	$("#but").on("click", function(){
		number = $("#in1").val();

		if ((number%3)==0){
			$("#clk_out").html("divisible");
		}
		else{
			$("#clk_out").html("not divisible");
		}
	});
}

function Even_Odd_Check(){
	var number1;
	$("#even_click").on("click", function(){
		number1 = $("#even_odd").val();
		if ((number1 % 2)==0){
			$("#even_out").html("Very Even");
		}
		else{
			$("#even_out").html("Very Odd");
		}
	});
}

function age_checker(){
	var age;

	$("#age_in").on("click", function(){
		age = $("#age_display").val();

		if(age<18){
			$("#final").html("Youngling");
		}
		else{
			$("#final").html("18+");
		}
	});
}

function Greeting_alert(){
	var name;
	var chk_name = "Kazim";
	$("#name_dis").on("click", function(){
		name = $("#name_in").val();
		if(name===chk_name){
			$("#name _out").html("Same");
		}
		else{
			$("#name_out").html("Not So Same");
		}
	});
}

function switch_divide(){
	var three;
	$("#switch_btn").on("click", function(){
		three = $("#switch_in").val();
		switch(three%3){
			case 0:
				$("#switch_out").html("This is a Divisible by three");
				break;
			default:
				$("#switch_out").html("Not so divisible by three");
		}
	});
}

function input_checker(){
	var input;
	$("#text_btn").on("click", function(){
		input = $("#in_text").val();
		if((input > 'A' && input < 'Z') || (input > 'a' && input < 'z')){
			$("#out_text").html("Thats some text right?");
		}
		else{
			$("#out_text").html("thats some non text shit");
		}
	});
}

function new_calc(){
	var val_1;
	var val_2;
	var operator1;
	var new_val;

	operator1 = $(".but").click(function(){
		$(this).val();
	});


	$("#btn_clk").on("click", function(){
		val_1 = $("#in_1").val();
		val_2 = $("#in_2").val();
		/*operator1 = $(".but").click(function(){
			$(this).val();
		});*/

		String(operator1);
		new_val = val_1+operator1+val_2;
		$("#cal_out").html(new_val);
	});
}


function assert(value, desc){
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results");
	document.getElementById("results").appendChild(li);
}

var text = "Domo Arigato";
console.log("Before Defining the function here");

function useless(ninjaCallback){
	console.log("In the uselss function");
	return ninjaCallback();
}
function getText(){
	console.log("In the getText function");
	return text;
}
console.log("Before making all the calls");
assert(useless(getText)=== text, "The uesless function works" + text);
console.log("After the calls have been made");

var values = [0, 3 , 2, 5, 7, 4, 8, 1];
var callback_val = [];
values.sort((value1, value2) => callback_val = value1 - value2);

var ninja = {};
ninja.name = "kaneki-kun";
ninja.country = "Leaf_village_shinobi";
ninja.type = "S Rank";
ninja.death = "Zero Deaths";

var wieldSword = function(){};
wieldSword.swordType = "Shia-Power!";
wieldSword.number = 7;
wieldSword.ID = "Teri Maa Di Sword";

var store = {
	nextID  : 1,
	cache : {},
	add : function(fn){
		if(!fn.id){
			fn,id = this.nextID++;
			this.cache[fn.id] = fn;
			return true;
		}
	}
};
function ninja_boi(){
	assert(store.add(ninja), "function was safely added!");
	assert(!store.add(ninja), "But it was only added once!");
}
ninja_boi();
ninja_boi();


function isPrime(value){
	if (!isPrime.answers){
		isPrime.answers = {};
	}
	if(isPrime.answers[value] !== undefined){
		return isPrime.answers[value];
	}
	var prime = value !== 1;
	for(var i = 2; i < value; i++){
		if(value % i == 0){
			prime = false;
			break;
		}
	}
	return isPrime.answers[value] = prime;
}
assert(isPrime(5), "5 is prime");
assert(isPrime.answers[5], "The answers were cached");
isPrime(6);