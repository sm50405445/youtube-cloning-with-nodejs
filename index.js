//노드 모듈에서 express 가져옴
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log('Listening on: http://localhost:${PORT}');


const handleHome = (req,res) => 
    res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req,res,next) =>{
    console.log("I'm between");
    next();
} 

//middleware territory
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));



//여기에 middleware 쑤셔넣으면 됨
app.get("/",handleHome);

//여기에 middleware가 들어가면 profile에 들어가기전에 실행

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);