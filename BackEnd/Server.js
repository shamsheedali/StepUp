import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from './router/userRouter.js';
import connectDB from './db/connection.js';

dotenv.config();

const app = express();

app.use(express.json());

//CORS
app.use(cors());

//USER-ROUTE
app.use('/user', userRouter);

//DATABASE--CONNECTION
connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Started...");
});
