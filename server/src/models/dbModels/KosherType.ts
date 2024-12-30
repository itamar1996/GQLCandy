import mongoose, { Schema } from "mongoose";
import { IKosherType } from "../types";

const kosherTypeSchema = new Schema<IKosherType>({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    description: { type: String, required: true },
}) 

export const KosherType = mongoose.model<IKosherType>('KosherType', kosherTypeSchema)