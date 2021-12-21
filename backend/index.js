import express, { response } from "express";
import { request } from "http";
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
app.use(bodyParser.json({extends: true }));
app.use(bodyParser.urlencoded({extends: true}));
app.use(cors());
app.use('/users',route);
const PORT= 8081;
const URL='mongodb://jetzael:sdvsf12345@proyecto-shard-00-00.mpwv4.mongodb.net:27017,proyecto-shard-00-01.mpwv4.mongodb.net:27017,proyecto-shard-00-02.mpwv4.mongodb.net:27017/PROJECT_0?ssl=true&replicaSet=atlas-ku8ae7-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running succesfully on port ${PORT}`);
    });
}).catch(error=>{
    console.log('Error',error.message);
})

