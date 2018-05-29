// DATA
var fs = require('fs');
// npm install --save stat-mode [you should to download ready module from npm] !!!
var StatMode = require('stat-mode');

// ----------------------------------I TASK-------------------------------------
// in console: show information about the image(cat.jpg):
fs.stat('./cat.jpg', function(err, stats) {
  console.log(stats);
});

// show information about the image and decoding the result of the fs.stats operation
fs.stat('./cat.jpg', function(err, stats) {
  var statMode = new StatMode(stats);
  console.log(statMode.toString());
});

// -------------------------------II TASK---------------------------------------
// read file tekst.txt and show Buffer[ASCII signs] in console
fs.readFile('./tekst.txt', function(err, data) {
  console.log(data);
});
// decoding the result of the fs.readFile operation[we see text in tekst.txt]
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
});

// -------------------------------III TASK--------------------------------------
// text overwrites
fs.writeFile('./tekst.txt', 'Nowy tekst w pliku tekst.txt', function(err) {
  // if an error occurs, throw an exception
  if (err) throw err;
  console.log('zapisano!');
});
