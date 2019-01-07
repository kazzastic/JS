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