var randomNumber = Math.floor(Math.random() * 101) + 19;

console.log ("Random number is " + randomNumber);
var wins = 0;
var losses = 0;
var total = 0;
crystalVar1 = Math.floor(Math.random() * 13) + 1;
console.log ("crystalVar1 is " + crystalVar1)
crystalVar2 = Math.floor(Math.random() * 13) + 1;
console.log ("crystalVar2 is " + crystalVar2)
crystalVar3 = Math.floor(Math.random() * 13) + 1;
console.log ("crystalVar3 is " + crystalVar3)
crystalVar4 = Math.floor(Math.random() * 13) + 1;
console.log ("crystalVar4 is " + crystalVar4)
$("#total").html(total);



$("#random-number").html(randomNumber);
$("#win").html("<p><b>Wins: </b>" + wins + "</p>");
$("#lose").html("<p><b>Losses: </b>" + losses + "</p>");
$("#crystal1").click(function(){
	total =  total + crystalVar1;
    $("#total").html(total);
	if (total == randomNumber) {
	$("#game-call").html("<p><b>You won!</b></p>");
		wins++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#win").html("<p><b>Wins: </b>" + wins + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}

	if (total > randomNumber) {
	$("#game-call").html("<p><b>You lost.</b></p>");
	losses++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#lose").html("<p><b>Losses: </b>" + losses + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}
});

$("#crystal2").click(function(){
	total =  total + crystalVar2;
    $("#total").html(total);
	if (total == randomNumber) {
	$("#game-call").html("<p><b>You won!</b></p>");
		wins++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#win").html("<p><b>Wins: </b>" + wins + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}

	if (total > randomNumber) {
	$("#game-call").html("<p><b>You lost.</b></p>");
	losses++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#lose").html("<p><b>Losses: </b>" + losses + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}
});

$("#crystal3").click(function(){
	total =  total + crystalVar3;
    $("#total").html(total);
	if (total == randomNumber) {
	$("#game-call").html("<p><b>You won!</b></p>");
		wins++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#win").html("<p><b>Wins: </b>" + wins + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}

	if (total > randomNumber) {
	$("#game-call").html("<p><b>You lost.</b></p>");
	losses++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#lose").html("<p><b>Losses: </b>" + losses + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}
});

$("#crystal4").click(function(){
	total =  total + crystalVar4;
    $("#total").html(total);
	if (total == randomNumber) {
	$("#game-call").html("<p><b>You won!</b></p>");
		wins++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#win").html("<p><b>Wins: </b>" + wins + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}

	if (total > randomNumber) {
	$("#game-call").html("<p><b>You lost.</b></p>");
	losses++;
	randomNumber = Math.floor(Math.random() * 101) + 19;
	total = 0;
	$("#total").html(total);
	$("#random-number").html(randomNumber);
	$("#lose").html("<p><b>Losses: </b>" + losses + "</p>");
	crystalVar1 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar1 is " + crystalVar1)
	crystalVar2 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar2 is " + crystalVar2)
	crystalVar3 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar3 is " + crystalVar3)
	crystalVar4 = Math.floor(Math.random() * 13) + 1;
	console.log ("The new crystalVar4 is " + crystalVar4)
	}
});
