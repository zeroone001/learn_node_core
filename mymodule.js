let fs = require('fs');
let path = require('path');
module.exports = (_path, ext, callback) => {
    // console.log(ext);
    fs.readdir(_path, 'utf8' ,(err,lists) => {
        if(err) return callback(err);
        let arr =  lists.filter((name) =>{
            return path.extname(name) === ('.' + ext);
        });

        callback(null, arr);
        
    });
};