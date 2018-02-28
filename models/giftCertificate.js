var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var gifttcartSchema = new Schema({
        userId: {type: String},
        userFullname : {type: String},
        gcCode : {type: String},
        isActive : {type: Date, default: Date.now},
        usesAt : {type: Date, default: Date.now},
        createdAt : {type: Date, default: Date.now},
        updatedAt : {type: Date, default: Date.now},
        is_deleted : {type : Boolean}

});

var giftcert =  mongoose.model('giftCertificate', gifttcartSchema);
module.exports = giftcert;
