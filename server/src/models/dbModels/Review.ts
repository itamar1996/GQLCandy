import mongoose, { Schema } from "mongoose";
import { IReview } from "../types";

const reviewSchema = new Schema<IReview>({
    candyId: { type: String, required: true, ref: 'Candy' },
    userId: { type: String, required: true, ref: 'User' },
    rating: { type: Number, required: true },
})

export const Review = mongoose.model<IReview>('Review', reviewSchema)