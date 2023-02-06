import mongoose from "mongoose";
const { Schema } = mongoose;

const StakeHolder = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	vehicles: {
		type: [String],
		// ref: 'Vehicle',
	},
});
