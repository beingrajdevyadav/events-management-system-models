import mongoose  from "mongoose";

const ticketSchema = new mongoose.Schema({
    event: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Event",
    },
    type: {
        type: String,
        enum: ["VIP", "Regular", "Student"],
    },
    price:Number,
    quantity: Number,
    sold: {
        type: Number,
        default: 0
    },
}, {timestamps: true});

export default Ticket = mongoose.model("Ticket", ticketSchema);