const express=require('express');

//set up express app
const app=express();

//listen for req
app.listen(process.env.port||4000,function(){
    console.log('hey');
});