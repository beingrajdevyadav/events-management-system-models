import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: String,
}, {timestamps: true});


export default Feedback = mongoose.model("Feedback", feedbackSchema);
