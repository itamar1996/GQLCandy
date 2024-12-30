import mongoose, { Schema } from "mongoose";
import { ICandy } from "../types";

const candtSchema = new Schema<ICandy>({
    name: { type: String, required: true },
    manufacturerId: { type: String, required: true, ref: 'Manufacturer' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    categoryIds: { type: [String], required: true , ref: 'Category'},
    kosherTypeIds: { type: [String], required: true , ref: 'KosherType'},
    ingredients: { type: [String], required: true },
    nutritionFacts: {
        servingSize: { type: String, required: true },
        calories: { type: Number, required: true },
        fat: { type: Number, required: true },
        carbs: { type: Number, required: true },
        protein: { type: Number, required: true },
    },
    inStock: { type: Number, required: true },
    averageRating: { type: Number, required: true },
    manufactureDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    allergens: { type: [String], required: true },
    isGlutenFree: { type: Boolean, required: true },
    isVegan: { type: Boolean, required: true },
})
export const Candy = mongoose.model<ICandy>('Candy', candtSchema)  