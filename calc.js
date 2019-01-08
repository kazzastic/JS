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
		if((name.is(chk_name)==1)){
			$("#name _out").html("Same");
		}
		else{
			$("#name_out").html("Not So Same");
		}
	});
}