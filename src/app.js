import express from 'express';
import connectDB from './config/db.js';   // your DB connection function
import rootRouter from './routes/index.js';   // root routes

const app = express();

app.use(express.json());

app.use('/', rootRouter); 

connectDB();  

export default app;  


