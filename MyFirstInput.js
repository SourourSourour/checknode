var fs = require('fs');
var file = fs.readFileSync(process.argv[2], 'utf8');
var lines = file.split("\n");
var numberOfLines = lines.length -1;
console.log(numberOfLines);
