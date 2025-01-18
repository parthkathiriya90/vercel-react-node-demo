import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const options = {
    connectTimeoutMS: 60000,
    serverSelectionTimeoutMS: 60000,
};

const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined in the environment variables.");
    }

    try {
        await mongoose.connect(uri, options);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

// Call the function to connect to the database
export default connectToDatabase;