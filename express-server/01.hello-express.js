const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.end("익스프레스 처음 실행");
});

app.listen(port, () => {
    console.log("익스프레스 실행");
});
