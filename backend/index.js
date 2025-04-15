import express from 'express';
import mongoose from 'mongoose';
import router from './api/User.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

export const connectDB=()=>{mongoose.connect("mongodb://localhost:27017/",{
    dbName:"Quote"
})
.then(()=>{console.log("DB Connection fulfilled")})
.catch((err)=>{
    console.log(`${err}:db not connected`);
})
}

//seeding the db
//SeedDB();

export default app;



