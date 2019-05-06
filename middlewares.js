import routes from "./routes";
import multer from "multer";

const multerVideo = multer({
    dest: "uploads/videos/"
})

export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = 'WeTub';
    res.locals.routes = routes;
    res.locals.user={
        isAuthenticated: false,
        id: 1
    }
    //next에 req를 전달
    //함수를 끝내고 다음으로 전달 즉 라우터의 시작
    next();
};

export const uploadVideo = multerVideo.single('videoFile');