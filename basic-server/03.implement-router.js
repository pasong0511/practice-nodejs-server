const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (path === "/user") {
        user(req, res);
    } else if (path === "/feed") {
        feed(req, res);
    } else {
        notFound(req, res);
    }
}).listen("8080", () => console.log("라우터 만들기"));

const user = (req, res) => {
    res.end("[user] name : andy, age: 30"); // ❸
};

const feed = (req, res) => {
    res.end(`<meta charset="UTF-8"><ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
</ul>
`);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};
