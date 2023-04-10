import express from "express"
import { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser"
import app from "./app";

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = app.listen(3000, () => {
    console.log("listen port 3000")
})

export default server;