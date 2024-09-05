import mongoose from "mongoose";

import 'dotenv/config';


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.MONGO_DATA}`
        );
        console.log(`AdminDB connected: ${conn.connection.host}`)
    } catch (e:any) {
        console.log(e.message);
        process.exit(1);        
    }
}

export {connectDB}