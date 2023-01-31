import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const db_connect = async () => {
	try {
		await mongoose.connect(process.env.Mongo_db);
		console.log("connected");
	} catch (error) {
		throw error;
	}
};

const app = express();

app.listen(8000, () => {
	db_connect();
	console.log("connected");
});
