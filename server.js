import express from "express";
import colors from "colors";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import ConnectDb from "./Connection/ConnectDb.js";


const app = express();

dotenv.config();


const PORT = process.env.PORT || 8080;

ConnectDb();

app.get("/",(req,res)=>{
     res.send({
        message:"Welcome to 8080",
     });
})


app.listen(PORT,()=>{
    console.log(`Server in running on ${PORT}`.bgCyan.white);
})