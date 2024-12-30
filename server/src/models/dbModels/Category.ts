import mongoose, { Schema } from "mongoose";
import { ICategory } from "../types";

const categoryShema = new Schema<ICategory>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
})

export const Category = mongoose.model<ICategory>('Category', categoryShema)