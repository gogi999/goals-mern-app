import express from 'express';
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} from '../controllers/goal.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/')
    .get(protect, getGoals)
    .post(protect, setGoal);

router.route('/:id')
    .put(protect, updateGoal)
    .delete(protect, deleteGoal);

export default router;
