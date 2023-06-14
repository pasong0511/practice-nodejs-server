const express = require("express");
const app = express();
const port = 8080;

let posts = [];

//req.body 사용하지 않기 위해서 json 미들웨어 사용
//사용하지 않으면 undefined 반환
app.use(express.json());

app.use(express.urlencoded({ exrended: true }));

//      /로 요청 들어올 경우 전체 posts json으로 반환
app.get("/", (req, res) => {
    res.json(posts);
});

// post 요청, req.body로 데이터 넘어옴
app.post("/posts", (req, res) => {
    console.log(typeof req.body);
    const { title, name, text } = req.body;
    posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
    res.json({ title, name, text });
});

//delete 요청
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id;
    const filteredPosts = posts.filter((post) => post.id !== +id);
    const isLengthCheangeed = posts.length != filteredPosts.length; //길이로 변경여부 확인

    posts = filteredPosts;

    if (isLengthCheangeed) {
        res.json("OK");
        return;
    }
    res.json("NOT CHANGED");
});

app.listen(port, () => {
    console.log("🎃express api server");
});
