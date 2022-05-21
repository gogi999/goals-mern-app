import express from 'express';
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} from '../controllers/goal.controller.js';

const router = express.Router();

router.route('/')
    .get(getGoals)
    .post(setGoal);

router.route('/:id')
    .put(updateGoal)
    .delete(deleteGoal);

export default router;