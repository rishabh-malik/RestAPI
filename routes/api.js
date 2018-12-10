const express=require('express');
const router=express.Router();

//GET req - get list of ninjas from db
router.get('/ninjas',function(req,res){
    res.send({type:'GET'});
});

//add new ninja to db
router.post('/ninjas',function(req,res){
    console.log(req.body);
    res.send({
    type:'POST',
    name:req.body.name,
    rank:req.body.rank
    });
});

//update ninja in db
router.put('/ninjas/:id',function(req,res){
    res.send({type:'PUT'});
});

//delete ninja from db
router.delete('/ninjas/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports=router;