import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import goalRouter from './routes/goal.routes.js';
import userRouter from './routes/user.routes.js';
import connectDB from './config/db.js';
import { errorHandler } from './middleware/error.middleware.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
