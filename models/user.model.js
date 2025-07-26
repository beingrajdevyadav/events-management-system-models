import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: String,
    password:{
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["attendee" , "organizer", "admin"],
        default : "attendee",
    },
    registeredEvents : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
        }
    ]
}, {timestamps: true});


export default User = mongoose.model("User", userSchema );