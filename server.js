var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started on port ' + port);
})

app.get("/", function (req, res) {
  res.send("hello universe!");
});

app.get("/adjective", function (req, res) {
res.send(getRandomWord(adjective));
});

function Adjective(){
  this.happy = true;
  this.melancholy = true;
  this.lachrymose = true;
  this.afraid = true;
  this.hyper = true;
};

var adjective = new Adjective();

function getRandomWord (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp}
}
