import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteIds: { type: [String], default: [], ref: 'Post' },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' }
})

export const User = mongoose.model<IUser>('User', UserSchema)