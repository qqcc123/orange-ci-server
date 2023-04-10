import express from "express"
import { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.urlencoded({extended: false }))

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    if (headers["accept-encoding"]) {
        console.log("accept-encoding: ", headers["accept-encoding"])
    }
    res.send(new Date().toLocaleTimeString());
})

app.post("/", (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const method = headers["method"];
    const gitEvent = headers["X-GitHub-Event"];
    const url = headers["URL"]
    if (gitEvent) { 
        console.log("git_event:", gitEvent);
        console.log("method:", method);
        console.log("URL:", url);
    } else {
        console.log("no vaild headers: ", headers);
    }
    
    res.send(url);
})

const server = app.listen(3000, () => {
    console.log("listen port 3000")
})

export default server;