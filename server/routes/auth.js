import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";


const router = express.Router();

// Create a user
router.post("/signup", signup )

// Sign In
router.post("/signin", signin )

// Google Authentication
router.post("/google", googleAuth)



export default router;