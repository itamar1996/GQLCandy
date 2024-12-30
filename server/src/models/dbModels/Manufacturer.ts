import mongoose, { Schema } from "mongoose";
import { IManufacturer } from "../types";

const manufacturerSchema = new Schema<IManufacturer>({
    name: { type: String, required: true },
    country: { type: String, required: true },
    logo: { type: String, required: true },
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    established: { type: Number, required: true },
})

export const Manufacturer = mongoose.model<IManufacturer>('Manufacturer', manufacturerSchema)