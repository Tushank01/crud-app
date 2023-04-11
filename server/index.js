import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import user from './DbSchema.js'

const app=express();
app.use(express.json());
app.use(cors());

// const connection_url="mongodb+srv://tushank11:tushank123@cluster0.dus0rax.mongodb.net/?retryWrites=true&w=majority";
const connection_url="mongodb+srv://tushank1:tushank1@cluster0.f04mchz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(()=> console.log("Database Connected"));

app.post("/addUser",(req,res)=>{

    user.create({name:req.body.name,alias:req.body.alias})
    .then((err)=> {
        if(err) res.send(err);
        else res.json("message","saved");
    });

})

app.get("/getUsers",(req,res)=>{
    user.find()
    .then((data)=> {
        res.json(data);
    })
})



app.listen(5000,console.log("Server running at port 5000"));