import { Response, Request, NextFunction } from "express";
import { TaskModel } from "../models/taskModels"

let commitIdArrary = [];

export const gitEventPost = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const gitEvent = headers["x-github-event"];
    if (!gitEvent) { 
        console.log("no vaild headers: ", headers);
        return res.send("error: no vaild headers");
    } 

    console.log("data: ", req.body)
    if (gitEvent == 'push' && req.body) {
        console.log("git_event:", gitEvent);
        const { after } = req.body;
        commitIdArrary.push(after);
        const commitString = commitIdArrary.join(', ');
        
        const task = new TaskModel({
            commitId: after
        })

        task.save().then(() => {
            console.log("mongoose save successfull: ", after);
        }).catch(err => {
            console.log("mongoose save failed: ", err.reason);
        })

        res.send(`ok: ${commitString}`);

    } else {
        res.send("error: no usefull request info");
    } 
}

export const testGet = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    if (headers["accept-encoding"]) {
        console.log("accept-encoding: ", headers["accept-encoding"])
    }
    const commitString = commitIdArrary.join(', ');
    res.send(new Date().toLocaleTimeString() + '\n' + commitString);
}
