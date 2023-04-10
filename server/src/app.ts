import { gitEventPost, testGet } from "./controllers/api";
import express from "express"

const app = express();

app.get("/", testGet);
app.post("/", gitEventPost);

export default app;
