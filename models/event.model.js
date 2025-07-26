import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    category: {
        type: String,
        enum: ["tech", "music", "sports", "education", "other"]
    },
    date: {
        type: Date,
        required: true
    },
    time: String,
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue",
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organizer",
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
    }],
    isPublished: {
        type: Boolean,
        default: false
    },
    coverImage: String,

}, {timestamps: true});


export default Event = mongoose.model("Event", eventSchema);