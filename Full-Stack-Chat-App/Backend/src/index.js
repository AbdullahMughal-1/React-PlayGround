import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();
import { connectDB } from "./lib/bd.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.router.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
