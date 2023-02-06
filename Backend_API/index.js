import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import vehiclesRoute from "./routes/vehicles.js";
import vehiceSHolderRoute from "./routes/vehicle_stakeholder.js";

// import body-parser from "body-parser";
const app = express();

dotenv.config();
const db_connect = async () => {
	try {
		await mongoose.connect(process.env.Mongo_db);
		console.log("connected");
	} catch (error) {
		throw error;
	}
};
mongoose.connection.on("disconnected", () => {
	console.log("mongdb disconnected");
});

//middleware

app.use("/auth", authRoute);

app.listen(8000, () => {
	db_connect();
	console.log("connected");
});
