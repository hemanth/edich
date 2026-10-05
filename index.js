'use strict';
var which = ((m) => (m && m.default) ? m.default : m)(require('which'));
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
