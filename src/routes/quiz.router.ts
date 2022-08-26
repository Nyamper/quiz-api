import express = require('express');

import QuizController from '../controllers/quiz.controller';
import QuizService from '../services/quiz.service';

const router = express.Router();

const quizController = new QuizController(new QuizService());

router.get('/', quizController.getAllQuizzes.bind(quizController));

router.get('/:id', quizController.getQuiz.bind(quizController));
router.get(
  '/answers/:id',
  quizController.getQuizCorrectAnswers.bind(quizController)
);
router.post('/', quizController.createQuiz.bind(quizController));

export default router;
