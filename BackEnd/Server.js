import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js'
import categoryRouter from './router/categoryRoutes.js'
import productRouter from './router/productRouter.js'
import connectDB from './db/connection.js';

dotenv.config();

const app = express();

app.use(express.json());

//CORS
app.use(cors());

//USER-ROUTE
app.use('/user', userRouter);
//ADMIN-ROUTE
app.use('/admin', adminRouter);
//CATEGORY-ROUTE
app.use('/category', categoryRouter);
//PRODUCT-ROUTE
app.use('/product', productRouter);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Started...");
});

//DATABASE--CONNECTION
connectDB();