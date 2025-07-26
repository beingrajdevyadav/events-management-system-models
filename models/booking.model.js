import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
    },
    quantity : Number,
    totalAmount: Number,
    bookingDate : {
        type: Date,
        default : Date.now
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "completed", "failded"],
        default: "pending",
    }
}, {timestamps: true});

export default Booking = mongoose.model("Booking", bookingSchema);