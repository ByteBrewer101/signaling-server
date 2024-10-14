import { WebSocketServer } from "ws";
import express from "express";

const app = express()
const server = app.listen(3000,()=>{
    console.log("running on 3000");
})

WebSocketServer