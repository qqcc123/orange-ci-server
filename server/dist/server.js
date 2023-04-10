"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
    console.log("req /");
    res.send("11111");
});
app.post("/", (req, res, next) => {
    console.log("post /");
    res.send("22222");
});
const server = app.listen(3000, () => {
    console.log("listen port 3000");
});
exports.default = server;
//# sourceMappingURL=server.js.map