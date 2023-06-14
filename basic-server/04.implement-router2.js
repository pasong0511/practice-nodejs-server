const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (path in urlMap) {
        try {
            //반환한 함수 실행
            urlMap[path](req, res);
        } catch (err) {
            console.log(err);
            serverError(req, res);
        }
    } else {
        notFound(req, res);
    }
}).listen("8080", () => console.log("라우터 리팩토링"));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    console.log("출력", userInfo);
    //url에서 요청 : http://localhost:8080/user?name=song&age=20
    res.end(`[user] {name} : ${userInfo.name}, age: ${userInfo.age}`);
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

const urlMap = {
    //키 : 함수
    "/": (req, res) => res.end("HOME"),
    "/user": user,
    "/feed": feed,
};
