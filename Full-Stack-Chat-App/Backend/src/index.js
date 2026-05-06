import express from "express"
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


dotenv.config();
import { connectDB } from "./lib/bd.js";
import authRoutes from "./routes/auth.route.js"



const app = express();

const PORT = process.env.PORT

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log("server is running on PORT:" + PORT)
    connectDB()
})