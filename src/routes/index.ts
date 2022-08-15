import express from 'express';

import auth from './auth.router';
import quiz from './quiz.router';
import leaderboard from './leaderboard.router';

const router = express.Router();

router.use('/auth', auth);
router.use('/quiz', quiz);
router.use('/leaderboard', leaderboard);

export default router;
