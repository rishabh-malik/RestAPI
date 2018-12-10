const express=require('express');
const router=express.Router();
const Ninja=require('../models/ninja')

//GET req - get list of ninjas from db
router.get('/ninjas',function(req,res,next){
    //to get all ninjas
    //Ninjas.find({}).then(function(ninjas){
    //res.send(ninjas);
    //})
    coordinates=[parseFloat(req.query.lng),parseFloat(req.query.lat)]
    Ninja.aggregate(
        [
            {
                '$geoNear': {
                    'near': coordinates,
                    'spherical': true,
                    'distanceField': 'dist',
                    'maxDistance': 100000,
                    'spherical':true
                }
            }
        ]
    ).then(function(ninjas){
        res.send(ninjas);
    });

});


//add new ninja to db
router.post('/ninjas',function(req,res,next){
    //creating a new ninja from the data sent by the POST req and saving it
    Ninja.create(req.body).then(function(ninja){
        //return the saved data
        res.send(ninja);
    }).catch(next);
});

//update ninja in db
router.put('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Ninja.findOne({_id:req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res,next){
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;