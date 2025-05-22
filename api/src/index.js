import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB.js";
import userRoute from "./routes/user.route";
import productRoute from "./routes/product.route";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", userRoute);
app.use("/api", productRoute);

app.listen(() => {
	// connectDB();
	console.log(`Server running on port: ${PORT}`);
});
