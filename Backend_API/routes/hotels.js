import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
const router = express.Router();

//create HOTEL

router.post("/", async (req, res) => {
	const newHotel = new Hotel(req.body);

	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
// uUPDATE HOTEL
router.put("/:id", async (req, res) => {
	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
		res.status(200).json(updatedHotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
//Delete HOTEL
router.delete("/:id", async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel delected");
	} catch (err) {
		res.status(500).json(err);
	}
});
// GET HOTEL
router.get("/:id", async (req, res, next) => {
	// return next();
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (err) {
		res.status(500).json(err);
	}
});
// GET ALL HOTELS
router.get("/", async (req, res) => {
	// const failed = true;
	// if (failed) return next(createError(401, "you are not authenticated"));
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (err) {
		res.status(500).json(err);
	}
});
export default router;
