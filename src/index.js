import dotenv from "dotenv";
import { app } from './app.js';
import connectDB from './db/dbconnection.js';

dotenv.config({
    path: './.env'
});

console.log("Starting the server...");


connectDB()
.then(() => {
    console.log("MongoDB Connected !!");
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is Running at Port ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MongoDb Connection Failed ", err);
});
