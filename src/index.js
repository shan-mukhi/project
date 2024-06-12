import dotenv from "dotenv";
dotenv.config({ path: './.env' });

import connectDB from "../db/dbconnection.js";
import { app } from '../src/app.js';

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});
