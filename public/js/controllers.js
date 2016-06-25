'use strict'

var app = angular.module('myApp');

var numPlayers = 5;

app.controller('mainCtrl', function($scope, $http, Deck){

  var whiteCards;
  var blackCards;
  $scope.blackCard;
  $scope.currWhiteCards;

  fillWhiteDeck();
  fillBlackDeck();

function fillWhiteDeck() {
  Deck.getWhite()
  .then( res =>{
    whiteCards = res;
    whiteCards = shuffle(whiteCards);
   
    let players = [];
    
    for(let i =0; i<numPlayers; i++){

      let currPlayer = {
        hand: getCards(10),
        czar: false,
        points: 0
      }

      players.push(currPlayer);

    }
    console.log("players: ", players);
  })
  .catch(err =>{
    console.log("err: ", err);
  })
}

function fillBlackDeck() {
    Deck.getBlack()
  .then( res =>{
    blackCards = res;
    blackCards = shuffle(blackCards);
  })
  .catch(err =>{
    console.log("err: ", err);
  })
}

function getBlackCard(){
  if(blackCards.length === 0){
    fillBlackDeck();
  }
  return blackCards.splice(0, 1);
}

function getCards(numCards){
  if(whiteCards.length < numCards){
    fillWhiteDeck();
  }
  return whiteCards.splice(0, numCards);
}


});


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




app.controller('game1Ctrl', function($scope, $stateParams){
  console.log("game1Ctrl");
  console.log('$stateParams:', $stateParams);
  


});


app.controller('game2Ctrl', function($scope, $stateParams){
  console.log("game2Ctrl");
  console.log('$stateParams:', $stateParams);
});


app.controller('game3Ctrl', function($scope, $stateParams){
  console.log("game3Ctrl");
  console.log('$stateParams:', $stateParams);
});


app.controller('game4Ctrl', function($scope, $stateParams){
  console.log("game4Ctrl");
  //console.log('$stateParams:', $stateParams);
});

