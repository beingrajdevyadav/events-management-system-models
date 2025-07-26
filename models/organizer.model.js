import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    organizationName: String,
    event: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Event
        }
    ]
}, {timestamps: true});

export default Organizer = mongoose.model("Organizer", organizerSchema);