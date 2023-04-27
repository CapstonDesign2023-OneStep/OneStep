const express = require("express");
const app = express();

/* const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secretCode', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session()); */

const MongoClient = require('mongodb').MongoClient;

app.use(express.json())

app.get("/", function (req, res) {
    res.send("안녕하세요!");
});

var db;
MongoClient.connect('mongodb+srv://asd72621:Otani0402!@sujin.tw50epq.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (error, client) {
    if (error) return console.log(error);
    db = client.db('OneStep');
    app.listen(3000, () => console.log("3000포트에서 대기 중..."));


    //회원가입할때 DB로 보내기
    app.post('/signup', function (req, res) {
        db.collection('post').insertOne({
            nickName: req.body.nickName,
            birthDate: req.body.birthDate,
            type: req.body.type,
            email: req.body.email,
            passWd: req.body.passWd,
            phoneNum: req.body.phoneNum
        }, function (err) {
            console.log('저장완료')

            if (err) return res.json({ success: false });
            return res.status(200).json({ success: true });
        });
    });
    app.post("/login", function (req, res) {
        //로그인을할때 아이디와 비밀번호를 받는다
        console.log('email', req.body.email)
        db.collection('login').findOne({ email: req.body.email }, function (err, result) {
            if (err) {
                console.log('sever Err', err)
                return res.json({
                    loginSuccess: false,
                    message: "존재하지 않는 아이디입니다.",
                });
            }
            else {
                if (req.body.passWd == result.passWd) {
                    console.log('error', error)
                    return res.json({
                        loginSuccess: true,
                        message: "로그인 성공",
    
                    })
    
                }
                else {
                    return res.json({
                        loginSuccess: false,
                        message: "비번이 틀렸습니다",
                    })
                }
            }
    
    
        });
        //서버띄우는 코드 여기로 옮기기   
    })
    
    //post 테이블에 있는 데이터를 찾음
    app.get('/signup', function (req, res) {
        db.collection('post').find().toArray(function (error, result) {
            console.log(result)
            res.send(result)
        })
    })
});

