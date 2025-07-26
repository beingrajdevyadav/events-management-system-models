import mongoose from "mongoose";

const sponserSchema = new mongoose.Schema({
    name: String,
    logoUrl : String,
    webiste: String,
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
        }
    ]
}, {timestamps: true});

export default Sponsor = mongoose.model("Sponsor", sponserSchema);