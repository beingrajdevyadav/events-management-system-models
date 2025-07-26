import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    message: String,
    link: String,
    read: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});


export default Notification = mongoose.model("Notification", notificationSchema);