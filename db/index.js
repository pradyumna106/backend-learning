import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionIN = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`you have succesfully connected to mongodb database ${connectionIN.connection.host} \n`);
    }catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}

export default connectDB;