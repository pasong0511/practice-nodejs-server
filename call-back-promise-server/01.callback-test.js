const DB = [];

function register(user) {
    return saveDB(user, function (user) {
        return sendEmail(user, function () {
            return getResult(user);
        });
    });
}

//DB 저장
function saveDB(user, callback) {
    DB.push(user);
    console.log("DB에 저장", user.name);
    return callback(user);
}

//이메일 보냄
function sendEmail(user, callback) {
    console.log("이메일 보냄", user.email);
    return callback();
}

//성송 메시지 보냄
function getResult(user) {
    return `성공 ${user.name}`;
}

const result = register({
    email: "test123@naver.com",
    password: "1324",
    name: "song",
});
console.log(result);
