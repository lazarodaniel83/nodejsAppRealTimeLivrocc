var fs = require('fs');
for(var i = 1;i <= 5;i++)
{
	var file = "sinc-txt"+i+".txt";
	var out = fs.writeFileSync("Hello hode.js!");
	console.log(out);
}


