import express from "express";
import routes from "../routes";

import{
    home,
    search,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,

} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.home,home);
videoRouter.get(routes.search,search);
//upload
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,uploadVideo,postUpload);
//Video Detail
videoRouter.get(routes.videoDetail(),videoDetail);
//Edit Video
videoRouter.get(routes.editVideo(),getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);
//Delete Video
videoRouter.get(routes.deleteVideo(),deleteVideo);

export default videoRouter;