import express from 'express';
import connectDB from './src/config/db.js';   // your DB connection function

const PORT= process.env.PORT || 6000;
const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {

console.log("welcome to task manager api")
res.status(200).json})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})






