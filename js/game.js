/* declare Variables */

var arr =[];
var rY=[], rX=[];
var cell;
var activePlayer, passivePlayer;
var box = $( "div#mapgen > div" );
var adjacents;
var buttonP1A = $("#P1A");
var buttonP1D = $("#P1D");
var buttonP2A = $("#P2A");
var buttonP2D = $("#P2D");
var fight = false;

/* Define Block Object*/
function Block(name, image) {
	this.name = name;
	this.image = image;
}

Block.prototype.setPosition = function() {
	for (var i=0;i<10;i++) {
    cell = findAvailableCell();
    arr[cell] = this.name;
    var mybox = document.getElementById(cell);
    mybox.classList.add(this.name);
  }
}

/* Define Player Object*/
function Player(name, image) {
  this.name = name;
  this.image = image;
  this.weapond = null;
  this.lifePoint = 100;
  this.damage = 10;
}

Player.prototype.setPosition = function() {
  cell = findAvailableCell();
  arr[cell] = this.name;
  var mybox = document.getElementById(cell);
  mybox.classList.add(this.name);
      
  mybox.innerHTML = '<img src="img/'+this.image +'" height="58" ></img>';
  //in order not to place players in adjacent divs
  var contacts= [cell-1,cell+1,cell-10,cell+10];
  $.each(contacts, function(index, contact) {
    if ((contact >= 0 && contact < 100) && arr[contact] == null) {
      arr[contact] = 'full';
    }
  });
  return this.position = cell;
}

/* Define Weapond Object*/
function Weapond(name, image, damage) {
  this.name = name;
  this.image = image;
  this.damage = damage;
}

Weapond.prototype.setPosition = function() {
  cell = findAvailableCell();
  arr[cell] = this.name;
  var mybox = document.getElementById(cell);
  mybox.classList.add(this.name);
}

/*  Instantiate objects */
var block = new Block("block", "beer.png");

var player1 = new Player("player1","viking1.png");
var player2 = new Player("player2", "viking2.png");

var arrow = new Weapond("arrow", "arrow.png", 40);
var axe = new Weapond("axe", "axe.png", 20);
var thor = new Weapond("thor", "thor.png", 50);
var shield = new Weapond("shield", "shield.png", 30);

/* Set Positions of each objects*/
block.setPosition(); 
player1.setPosition();
player2.setPosition();
arrow.setPosition();
axe.setPosition();
thor.setPosition();
shield.setPosition();


// Find Available Cell for Objects
function findAvailableCell(){
  do {
    cell = Math.floor((Math.random() * 100));
  }
  while (!(arr[cell] == null))
  return cell;
}

