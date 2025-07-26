import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
    },
    paymentMethod: {
        type: String,
        enum: ["credit_card", "debit_card", "upi", "net_banking"]
    },
    transactionId: String,
    amount: Number,
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending",
    },
    paymentDate: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

export default Payment = mongoose.model("Payment", paymentSchema);