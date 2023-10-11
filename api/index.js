import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import solarRoute from "./routes/solar.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()

//initial db connect
const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error;
  }
}

//listener
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

//middlewares
app.use(cors())
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/solar", solarRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "ERROR"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})