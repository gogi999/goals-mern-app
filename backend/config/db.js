import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect( process.env.MONGO_DB_URI)
    
        console.log(`MongoDB successfully connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;
