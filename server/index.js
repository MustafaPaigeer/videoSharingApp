import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

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

app.listen(3001, () => {
  connect()
  console.log("Connected..")
})