console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardOne = "queen";
var cardTwo = "king";
var cardsInPlay = [];
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
cardsInPlay;
console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);
if (cardsInPlay.length === 2)
	console.log("Cards Chosen");
if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match!");
}else (cardsInPlay.length === 2 && cardsInPlay[0]!==cardsInPlay[1])
	alert("Sorry,try again");


