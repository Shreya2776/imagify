import mongoose from "mongoose";

const connectDB = async()=>{
    try {
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
    console.log("✅ MongoDB Connected");
    } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // force exit if DB fails to connect
    }
}

export default connectDB;