import express from "express"
import { gitEventPost, testGet } from "./controllers/api";
import bodyParser from "body-parser"

const app = express();

//必须放在中间件的开头，解析请求格式
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/", testGet);
app.post("/", gitEventPost);

export default app;
