require('dotenv').config();
const express=require('express');
const apiRoute=require('./routes');

const app=express();
app.use("/api/v1",apiRoute);
app.use(express.json);


app.use(express.json({}));
 serverport=process.env.PORT || '3000';
app.listen(serverport,()=>{
    console.log(`Server is running on port ${serverport}`);
});