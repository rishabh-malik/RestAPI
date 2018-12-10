const express=require('express');
const router=express.Router();
const Ninja=require('../models/ninja')

//GET req - get list of ninjas from db
router.get('/ninjas',function(req,res){
    res.send({type:'GET'});
});

//add new ninja to db
router.post('/ninjas',function(req,res){
    //creating a new ninja from the data sent by the POST req and saving it
    Ninja.create(req.body).then(function(ninja){
        //return the saved data
        res.send(ninja);
});
});

//update ninja in db
router.put('/ninjas/:id',function(req,res){
    res.send({type:'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;