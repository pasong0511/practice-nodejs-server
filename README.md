책 : Node.js 백엔드 개발자 되기 by.박승규

//curl 다운로드
https://curl.se/windows/

사용방법:
터미널
curl localhost:8080

GET 요청

```
curl -X GET http://localhost:8080
```

POST 요청

```
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=제목1&name=song&text=안녕~" http://localhost:8080/posts
```

DELETE 요청

```
curl -X DELETE localhost:8080/posts/2
```
