import express from "express";
import cors from "cors";
import { connect } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";
import authRoutes from "./routes/auth.routes.js";
import "dotenv/config";


const app = express();

connect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Spades Todo running"));
app.use("/api/todo", todoRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));