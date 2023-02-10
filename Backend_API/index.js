import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";

// import body-parser from "body-parser";
const app = express();

dotenv.config();
const db_connect = async () => {
	try {
		await mongoose.connect(process.env.Mongo_db);
		console.log(" mongodb connected");
	} catch (error) {
		throw error;
	}
};
mongoose.connection.on("disconnected", () => {
	console.log("mongdb disconnected");
});

//middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/user", usersRoute);

app.listen(8000, () => {
	db_connect();
	console.log("connected");
});
