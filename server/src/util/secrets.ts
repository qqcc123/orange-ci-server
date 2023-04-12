import dotenv from "dotenv" //export function 可以以此种方式导出？不用import * as dotenv from "dotenv"
import fs from "fs"
import { DotenvConfigOutput } from "dotenv"

// let output: DotenvConfigOutput;

// if (fs.existsSync("env")) {
//     output = dotenv.config({ path: "env" });
// } else {
//     console.log("not find env file !!! ")
// }

// export const MONGO_URL_TEST = output.parsed["MONGODB_URI"] //只是为了测试语法
export const MONGO_URL = process.env.MONGODB_URI;


