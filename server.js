var express = require("express");
var app = express();
app.use(express.static(__dirname + "/app/"));
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
})

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.get("/adjective", function (req, res) {
res.send(getRandomWord(adjective));
});

app.get("/noun", function (req, res) {
res.send(getRandomWord(noun));
});

function Adjective(){
  this.happy = true;
  this.melancholy = true;
  this.lachrymose = true;
  this.afraid = true;
  this.hyper = true;
};

function Noun(){
  this.wombat = true;
  this.aardvark = true;
  this.marmoset = true;
  this.squirrel = true;
  this.parrot = true;
};

var adjective = new Adjective();
var noun = new Noun();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp}
}
