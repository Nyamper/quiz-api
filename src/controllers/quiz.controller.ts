import { Request, Response } from 'express';
import QuizService from '../services/quiz.service';
import { z } from 'zod';

const quizSchema = z
  .object({
    category: z.string(),
    quizName: z.string(),
    description: z.string(),
    cardImageUrl: z.string(),
    questions: z.array(
      z.object({
        question: z.string(),
        answers: z.array(z.string()),
        correctAnswer: z.string(),
      })
    ),
  })
  .optional();

class QuizController {
  constructor(private quizService: QuizService) {}
  async createQuiz(req: Request, res: Response) {
    try {
      await quizSchema.parse(req.body);
      const quiz = await this.quizService.addQuiz(req.body);
      return res.status(200).json(quiz);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }

  async getAllQuizzes(req: Request, res: Response) {
    try {
      const quizzes = await this.quizService.getAllQuizzes();
      return res.status(200).json(quizzes);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }

  async getQuiz(req: Request, res: Response) {
    try {
      const quiz = await this.quizService.getQuiz(req.params.id);
      return res.status(200).json(quiz);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }

  async getQuizCorrectAnswers(req: Request, res: Response) {
    try {
      const quiz = await this.quizService.getQuizAnswers(req.params.id);
      return res.status(200).json(quiz);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }
}

export default QuizController;
