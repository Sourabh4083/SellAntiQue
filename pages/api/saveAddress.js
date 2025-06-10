import connectDB from "@/db/connectDb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const addressSchema = new Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    address: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})


const Address = mongoose.models.Address || mongoose.model("Address", addressSchema);

export default async function handler(req, res) {
    await connectDB()
    if (req.method === "POST") {
        try {
            const newAddress = new Address(req.body)
            await newAddress.save()
            return res.status(201).json({message: "Address saved Successfully!"})
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
        
    }

    if (req.method === "GET") {
        try{
            const addresses = await Address.find()
            return res.status(200).json(addresses)
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
    res.status(405).json({ message: "Method Not Allowed"})
}
