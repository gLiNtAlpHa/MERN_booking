import express from "express";
import {
	createHotel,
	deleteHotel,
	getHotel,
	getHotels,
	updateHotel,
} from "../controllers/hotelsController.js";

const router = express.Router();

//create HOTEL

router.post("/", createHotel);
// uUPDATE HOTEL
router.put("/:id", updateHotel);
//Delete HOTEL
router.delete("/:id", deleteHotel);
// GET HOTEL
router.get("/:id", getHotel);
// GET ALL HOTELS
router.get("/", getHotels);
export default router;
