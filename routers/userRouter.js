import express from "express";
import routes from "../routes";

import{
    join,
    login,
    logout,
    userDetail,
    editProfile,
    changePassword
} from "../controller/userController";

const userRouter = express.Router();
userRouter.get(routes.join,join);
userRouter.get(routes.login,login);
userRouter.get(routes.logout,logout);
userRouter.get(routes.userDetail,userDetail);
userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.changePassword,changePassword);

export default userRouter;