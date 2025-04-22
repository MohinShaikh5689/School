import express from 'express';
import { config } from 'dotenv';

import schoolRouter from './router/school.router.js';

config();
const app = express();
app.use(express.json());

app.use('/school', schoolRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });