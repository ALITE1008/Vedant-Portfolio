import mongoose from "mongoose";

export const connectToMongoDb = async () => {

    const connection = {};

    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URl);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error("not connected");
    }
};

