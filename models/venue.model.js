import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    capacity: Number,
}, {timestamps: true});


export default Venue = mongoose.model("Venue", venueSchema);