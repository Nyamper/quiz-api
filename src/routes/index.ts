import express from 'express';

import auth from './auth.router';
import quiz from './quiz.router';
import leaderboard from './leaderboard.router';
import isAuthMiddleware from '../middlewares/isAuth.middleware';

const router = express.Router();

router.use('/auth', auth);
router.use('/quiz', isAuthMiddleware, quiz);
router.use('/leaderboard', isAuthMiddleware, leaderboard);

export default router;
