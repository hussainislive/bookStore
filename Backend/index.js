import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose
    .connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));
} catch (error) {
  console.log("Error:", error);
}

// defining Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
