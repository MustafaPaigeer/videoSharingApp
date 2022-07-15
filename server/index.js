import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/users.js"

const app = express()
dotenv.config()

const connect = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(()=> {
    console.log("connected to DB")
  })
  .catch ((error) => {
    throw error;
  })
}

app.use("/api/users", userRoutes)

app.listen(3000, () => {
  connect()
  console.log("Connected to server")
})