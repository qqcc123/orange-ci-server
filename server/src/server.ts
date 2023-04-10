import express from "express"
import { Response, Request, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("req /")
    res.send("11111");
})

app.post("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("post /")
    res.send("22222");
})

const server = app.listen(3000, () => {
    console.log("listen port 3000")
})

export default server;