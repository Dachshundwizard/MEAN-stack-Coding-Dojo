function Deck(){
    //Private variables//
    var suits = ['diamonds', 'clubs', 'hearts', 'spades'], //array of suits//
        values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'],
        self = this; // Taking a snapshot of this

        this.cards = [];
        // Nested for loops iterate over suits and values to create new cards
        suits.forEach(function(suit){
          values.forEach(function(value){
            self.cards.push(new Card(value, suit));
          });
        });
        return this;
      }

// Deck.prototype.shuffle = function (){
// }
// Deck.prototype.reset = function (){
// }
// Deck.prototype.dealRandomCard = function (){
// }
function Card(value, suit){
    this.value = value;
    this.suit = suit;
}
//
// function Player(name){
//     this.name = name;
//     this.hand = []; //initialized as an empty array
// }
//
// Player.prototype.takeCard = function(){
//
// }
//
// player.prototype.discard = function(){
//
// }
