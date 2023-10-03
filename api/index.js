import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import solarRoute from "./routes/solar.js"

const app = express()
dotenv.config()

//initial db connect
const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
  } catch (error) {
    throw error;
  }
}

//listener
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

//middlewares

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/solar", solarRoute);
app.use("/api/users", usersRoute);

app.listen(8800, ()=>{
    connect()
    console.log("connected to omg I LOVE NODEMON")
})