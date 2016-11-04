function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}


Card.prototype.getImageUrl = function(){
  if(this.point === 11) {
    this.point = 'jack';
  }
  else if (this.point === 12) {
    this.point = 'queen';
  }
  else if(this.point === 13) {
    this.point = 'king'
  }
  else if(this.point === 1) {
    this.point = 'ace'
  }
  return 'images/' + this.point + '_of_' + this.suit + '.png';
};


function Hand() {

  this.hand =[];
}
var myCard = new Card(11, 'hearts');
var myHand = new Hand();
Hand.prototype.addCard = function(card) {

  return this.hand.push(card);
  }

myHand.addCard(myCard);


function Deck () {

}
