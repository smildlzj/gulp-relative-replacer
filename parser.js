'use strict';
var util = require('util');
var Transform = require('readable-stream/transform');
var replacer = require('./replacer');

function Parser(file , options) {
    Transform.call(this);

    this.options = options;
    this.file = file;
}
util.inherits(Parser, Transform);

Parser.prototype._transform = function (chunk, enc, done) {
    var content = chunk.toString();

    if(content.indexOf(this.options.placeholder) == -1){
      done(null, chunk);
      return;
    }

    done(null, replacer(content , this.file , this.options));
};

module.exports = Parser;
