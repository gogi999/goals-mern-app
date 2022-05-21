import express from 'express';
import dotenv from 'dotenv';
import goalRouter from './routes/goal.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
