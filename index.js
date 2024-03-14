import express from 'express';
import cors from 'cors';
import router from './router/index.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
})