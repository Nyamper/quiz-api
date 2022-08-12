import express from 'express';

import auth from './auth.router';
import quiz from './quiz.router';

const router = express.Router();

router.use('/auth', auth);
router.use('/quiz', quiz);

export default router;