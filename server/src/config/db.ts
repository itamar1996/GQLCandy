import mongoose from "mongoose";

export const conenctToMongo = async () => { 
    try{
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri){
            throw new Error('Mongo URI is missing')
        }
        await mongoose.connect(mongoUri)
        console.log('Connected to MongoDB');
    }
    catch (error){
        console.log(error)
    }
}