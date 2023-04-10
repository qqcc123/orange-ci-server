import { Response, Request, NextFunction } from "express";

let commitIdArrary = [];

export const gitEventPost = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const gitEvent = headers["x-github-event"];
    if (!gitEvent) { 
        console.log("no vaild headers: ", headers);
        return res.send("error: no vaild headers");
    } 

    if (gitEvent == 'push' && req.body['after']) {
        console.log("git_event:", gitEvent);
        commitIdArrary.push(req.body['after']);
        const commitString = commitIdArrary.join(', ');
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
