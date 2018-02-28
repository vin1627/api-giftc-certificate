var giftcert = require('../models/giftCertificate');
var mod = giftcert;

var BaseCRUD = {
  save: function(obj, callback){
    var newObject = new mod(obj);
    newObject.save(function (err, singleObject) {
        callback(err, singleObject);
    });
  },
  search: function(search, callback){
    giftcert.find({is_deleted:false}, function(err, list){
      callback(err, list);
    });
  },

  fetchAll: function(search, callback){
    giftcert.find({}, function(err, list){
      callback(err, list);
    });
  },

  view: function(id, callback){
    giftcert.findById(id, function(err, result){
      callback(err, result);
    })
  },
  delete: function(id, formData, callback){
    giftcert.findByIdAndUpdate(id, {$set: formData}, function(err, result){
      callback(err, result);
    });
  },
  update: function(id, formData, callback){
    giftcert.findByIdAndUpdate(id, {$set: formData}, function(err, result){
      callback(err, result);
    });
  }
};

module.exports = BaseCRUD;
