import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
  .connect(process.env.MONGO_URI)
  .then(()=> {
    console.log("connected to DB");
  })
  .catch ((error) => {
    throw error;
  });
};

//middlewares
app.use(cookieParser());
app.use(express.json());

//routes

app.get('/', (req, res) => {
  res.send('hello world')
})


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vidoes", videoRoutes);
app.use("/api/comments", commentRoutes);


//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  connect()
  console.log(`Server is listening on port ${port}`)
})