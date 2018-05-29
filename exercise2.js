var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data) {
  console.log('The directory contents read:');
  console.log(data);
  fs.writeFile('./warehouse.txt', data, function(err){
    if (err) throw err;
    console.log('Saved');
  });
});
