// Create an object that represents a deck of playing cards.
// It will have a property cards that contains an array of all 52 cards including all clubs, spades, hearts and diamonds. Use a loop to generate the cards instead of adding each manually. The cards should be represented as an object with the properties: suit & number.
// Example Deck with a few Cards:
// const deck = {
//   cards: [
//     { suit: "hearts", number: 1 },
//     { suit: "spades", number: 10 },
//     ...
//   ]
// }

// Additionally, add the following methods to the deck:
// shuffle will randomly reorder the cards in the deck.
// draw will remove and return the top card of the deck.
// reset method which resets deck to all 52 cards.


const Suit = ["hearts", "spades", "clubs", "diamonds"]
const deck = {
    cards: []
}

for (let i = 0; i < Suit.length; i++){
    for (let j = 1; j<= 13; j++){
        deck.cards.push({suit:Suit[i], number : j});

    }
}
// console.log(deck);

function shuffle () {
    deck.cards[Math.random()]
}
console.log(deck.cards[])

function draw()
