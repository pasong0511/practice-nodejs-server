const url = require("url");
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("익스프레스 라우팅 리팩토링");
});

app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    const userInfo = url.parse(req.url, true).query;
    console.log("출력", userInfo);
    //url에서 요청 : http://localhost:8080/user?name=song&age=20
    res.json(`[user] {name} : ${userInfo.name}, age: ${userInfo.age}`);
}

function feed(req, res) {
    res.json(`<meta charset="UTF-8"><ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
</ul>
`);
}
