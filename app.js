//노드 모듈에서 express 가져옴
//import는 항상 알파벳 순으로 하기
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
const app = express();

//const PORT = 4000;

//const handleListening = () =>
//    console.log(`Listening on: http://localhost:${PORT}`);

  
//const handleHome = (req,res) => 
//    res.send("Hello from my ass");

//const handleProfile = (req, res) => res.send("You are on my profile");

//const betweenHome = (req,res,next) =>{
//   console.log("I'm between");
//    next();
//} 

//middleware territory

app.set('view engine','pug');

//미들웨어 어플리케이션 안전하게
app.use(helmet());
//쿠키를 전달받아 사용할 수 있도록 만들어주는 미들웨어 사용자 인증 같은 곳에 쓰임
app.use(cookieParser());
//사용자가 웹사이트로 전달하는 정보들을 검사 request에서 form이나 json형태로 된 body검사
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//미들웨어에서 발생하는 모든일을 logging
app.use(morgan("dev"));
app.use(localsMiddleware);



//여기에 middleware 쑤셔넣으면 됨
//app.get("/",handleHome);
//여기에 middleware가 들어가면 profile에 들어가기전에 실행
//app.get("/profile",handleProfile);

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);


export default app;

//app.listen(PORT, handleListening);