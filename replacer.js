var path = require('path');
var fs = require('fs');


var getDirname = function(_path, options){
  var dirname;
  //end with '/'
  if(/\/$/.test(_path)){
    dirname = _path;
  }else{
    if(fs.existsSync(_path)){
      if(fs.statSync(_path).isDirectory()){
        dirname = options.src;
      }else{
        dirname = path.dirname(options.src);
      }
    }else{
      dirname = path.dirname(options.src);
    }
  }

  return dirname;
};

var getRelative = function(from , to){
  var relative = path.relative(from , to);
  if(relative){
    relative = relative.replace(/\\/g , '/');

   if(!/\/$/.test(relative)){
      relative += '/';
    }
  }

  return relative;
};

module.exports = function(content , file , options){
  var from = options.from;
  var to = options.to;

  if(from){
    from = getDirname(from, options);
  }else{
    from = path.dirname(file.path);
  }

  if(to){
    to = getDirname(to);
  }else{
    to = path.dirname(file.path);
  }


  var relative = getRelative(from , to);


  return content.replace(new RegExp(options.placeholder , 'g') , relative);
};