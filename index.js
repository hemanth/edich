'use strict';
var which = require('which');
var ed = require('editor');

var edich = function(name,cb){
  which(name,function(err,path){
    if(!err){
      ed(path);
    } else {
      throw new Error(err);
    }
  });
};

module.exports = edich;
