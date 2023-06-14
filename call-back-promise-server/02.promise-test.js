const DB = [];

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);

    console.log("유저1", user);
    console.log(`save ${user.name} to DB`);

    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error("DB 저장 실패"));
        }
    });
}

function sendEmail(user) {
    console.log("유저2", user);

    console.log(`이메일 보냄 ${user.email}`);
    return new Promise((resolve) => {
        return resolve(user);
    });
}

//성송 메시지 보냄
function getResult(user) {
    console.log("유저3", user);
    return new Promise((resolve, reject) => {
        resolve(`등록 성공 ${user.name}`);
    });
}

function registerByPromise(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    console.log(result);
    return result;
}

const myUser = {
    email: "test123@naver.com",
    password: "1324",
    name: "song",
};
const result = registerByPromise(myUser);
result.then(console.log);
