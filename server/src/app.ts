import express from "express"
import * as base from "./controllers/api";
import bodyParser from "body-parser"
import mongoose from "mongoose"
import { MONGO_URL } from "./util/secrets";

mongoose.connect(MONGO_URL).then(() => {
    console.log("connect successfull !!!")
}).catch((reason : any) => {
    console.log("mongoose connect err: ", reason);
})

const app = express();

//必须放在中间件的开头，解析请求格式
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/",  base.testGet);
app.post("/", base.gitEventPost);

export default app;
