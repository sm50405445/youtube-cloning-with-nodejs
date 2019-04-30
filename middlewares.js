import routes from "./routes";

export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = 'WeTub';
    res.locals.routes = routes;
    //next에 req를 전달
    //함수를 끝내고 다음으로 전달 즉 라우터의 시작
    next();
};
