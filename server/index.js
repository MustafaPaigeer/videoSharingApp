import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/users.js"
import authRoute from "./routes/auth.js"
import videoRoute from "./routes/videos.js"
import commentRoute from "./routes/comments.js"

const app = express()
dotenv.config()

const connect = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(()=> {
    console.log("connected to DB");
  })
  .catch ((error) => {
    throw error;
  });
};

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoutes)
app.use("/api/vidoes", videoRoute)
app.use("/api/comments", commentRoute)


app.listen(3001, () => {
  connect()
  console.log(`Server is listening on port 3001`)
})