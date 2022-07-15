import express from "express";
import { signup } from "../controllers/auth.js";
import {  } from "../controllers/user.js";

const router = express.Router();

// Create a user
router.post("/signup", signup )

// Sign In
router.post("/signin", )

// Google Authentication
router.post("/google", )



export default router;