var fs = require('fs');

for(var i = 0;i <= 5;i++)
{
	 var file = "async-txt"+i+".txt";
	 fs.writeFile(file,"Hello node.js!",function(err,out)
	 {
	 		console.log(out);
   });	
}
