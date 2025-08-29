import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import router from "./models/routes/Authroutes.js";
import Loginroute from "./models/routes/Loginroute.js";
import route from "./models/routes/TransactionRoute.js";
dotenv.config();

console.log("JWT_SECRET:", process.env.JWT_SECRET); // <-- Add this line here to check if JWT_SECRET is loaded

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Yes API is Running!");
});

app.use("/auth", router);
app.use("/auth", Loginroute);
app.use("/api", route);

const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase";

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully!");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

start();
