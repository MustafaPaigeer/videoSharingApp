import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, random, sub, trend } from "../controllers/video.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.post("/:id", verifyToken, deleteVideo);
router.post("/find/:id", getVideo);
router.put("/view/:id", addView)
router.put("/trend", trend)
router.put("/random", random)
router.put("/sub", verifyToken, sub)

export default router;