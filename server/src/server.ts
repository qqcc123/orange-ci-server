import express from "express"
import { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.urlencoded({extended: false }))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("req /")
    res.send("11111 new");
})

app.post("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("post /")
    res.send("22222");
})

const server = app.listen(3000, () => {
    console.log("listen port 3000")
})

export default server;