import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creditBalance: {   // 👈 yaha pe field likhna hai
        type: Number,
        default: 5
    }
});

const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
