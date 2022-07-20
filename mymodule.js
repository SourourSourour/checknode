var fs = require("fs")
var path = require("path")

module.exports= function(dir, filterStr, callback){
    fs.readdir(dir, (err, list)=>{
        if(err){ return callback(err)}
        
       list= list.filter(el=>{
            return path.extname(el)==='.'+filterStr;
        });
        callback(null, list);

    });
}