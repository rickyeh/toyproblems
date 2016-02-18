var orderedDeck = function() {
  var suits = ['♥', '♣', '♠', '♦'];
  var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var shuffleDeck = function(deck) {
  var counter = deck.length;
  var temp;
  var index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = deck[counter];
    deck[counter] = deck[index];
    deck[index] = temp;
  }
  console.log(deck);
  return deck;
}

var newDeck = orderedDeck();
shuffleDeck(newDeck);