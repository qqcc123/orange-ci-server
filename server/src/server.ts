import app from "./app";

const server = app.listen(3000, () => {
    console.log("listen port 3000")
})

export default server;