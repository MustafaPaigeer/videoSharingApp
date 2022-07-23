import express from "express";
import { addComment, deleteComment, getComment } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment)
router.delete("/", verifyToken, deleteComment)
router.get("/", verifyToken, getComment)


export default router;