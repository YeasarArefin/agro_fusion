import { User } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema<User> = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/.+\@.+\..+/, 'please use a valid email address']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    verificationCode: {
        type: String,
        required: [true, 'verification code is required']
    },
    verificationCodeExpiry: {
        type: Date,
        required: [true, 'verification code expiry is required']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', UserSchema);
export default UserModel;