// functionality that first reads the contents of the file, then saves the data
// and reads the file again after changing its contents
var fs = require('fs');
var colors = require('colors');
// + we should to use the commend:  npm install --save colors

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    // fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
    fs.appendFile('./tekst.txt', '\n A tak wyglada po zapisie!',function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.green)
            console.log(data);
        });
    });
});

// warning: Each event (read, write, read) must be done in the right order,
// so we dive in subsequent asynchronous calls inside consecutive callbacks.
