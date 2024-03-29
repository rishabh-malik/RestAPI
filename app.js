const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routes/api');

//set up express app
const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api',routes);

//error handling
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error:err.message});
});

//listen for req
app.listen(process.env.port||4000,function(){
    console.log('hey');
});