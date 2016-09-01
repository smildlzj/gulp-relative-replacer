var path = require('path');

module.exports = function(content , file , options){
  var from = options.from;
  var to = options.to;

  if(!from && !to){
    from = file.base;
  }

  var relative;
  var dirname = path.dirname(file.path);
  if(from){
    relative = path.relative(from , dirname);
  }else{
    relative = path.relative(dirname , to);
  }

  if(relative){
    relative = relative.replace('\\' , '/') += '/';
  }


  return content.replace(options.placeholder , relative);
};