var express = require('express');
var router = express.Router();
var giftCertificateController = require('../controllers/giftCertificateController');
var giftcert = require('../models/giftCertificate');

router.get('/', (res, req, next) =>{
  giftCertificateController.search({}, (err, result) =>{
    var respond = {data: result};
      res.send(respond);
  });
});

router.get('/all', function(res, req, next){
  giftCertificateController.fetchAll({}, function(err, result){
      var respond = {data: result};
      res.send(respond);
  });
});

router.post('/basic-search', function(res, req, next){
  var data = req.body;
  giftCertificateController.find(data, function(err, results){
    objectResponse = {result: "success", data: results };
    res.send(objectResponse);
  });
});

//create data
router.post('/', function(req, res, next){
  var data = req.body;
  giftCertificateController.save(data, function(err, result){
    var response = {data: result};
      var handleActionButton = "<button class = 'btn btn-danger' id = 'btnDelete' data-id = '"+ result._id +"' data-module='brand'> <span class = 'fa fa-trash-o'></span> Delete</button> <button class = 'btn btn-success' id = 'btnEdit' data-id = '" + result._id + "' data-module = 'brand'><span class = 'fa fa-edit'></span>Edit</button>   <button class = 'btn btn-primary' id = 'btnView' data-id = '"+ result._id +"' data-module = 'brand'> <span class = 'fa fa-info-circle'></span> View</button>";

      var fomdata = {action: handleActionButton}
      giftcert.findByIdAndUpdate(result._id, {$set:fomdata}, function(err, resultsofResults){
      giftcert.findByIdAndUpdate(result._id, {$set:formdata}, (err, result) =>{

      });
      });
        res.send(JSON.stringify(response));
  });
});

//find by id
router.get('/:id', function(req, res, next){
    var id = req.params.id;
    giftCertificateController.view(id, function(err, result){
          var response = {data: result};
      res.send(response)
    });
});

router.delete('/:id', function(req, res, next){
  var id = req.params.id;
    giftCertificateController.delete(id, function(err, result){
      var response = {data: result};
      res.send(response)
    })
})

//update thru id

router.post('/:id', function(req, res, next){
  var id = req.params.id;
  var formData = req.body;
    giftCertificateController.update(id, formData, function(err, result){
        var response = {data: result};
        res.send(response);
    });
});
module.exports = router;
