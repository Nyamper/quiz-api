import { Quiz } from '../models/quiz.model';
import { TQuiz } from '../types/types';

class QuizService {
  constructor(private quiz: Quiz = new Quiz()) {}

  public async addQuiz(params: TQuiz) {
    const quiz = await this.quiz.model.findOne({ quizName: params.quizName });
    if (quiz) {
      throw new Error('Quiz already exists');
    }
    const newQuiz = new this.quiz.model(params);
    await newQuiz.save();
    return newQuiz;
  }

  public async getAllQuizzes() {
    const data = await this.quiz.getQuizzes();
    return data.map((item) => {
      return {
        category: item.category,
        quiz: item.quizName,
        id: item._id,
        description: item.description,
        cardImageUrl: item.cardImageUrl,
      };
    });
  }

  public async getQuiz(id: string) {
    const quiz = await this.quiz.getQuiz(id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    const noCorrectAnswers = {
      category: quiz.category,
      quizName: quiz.quizName,
      id: quiz._id,
      description: quiz.description,
      cardImageUrl: quiz.cardImageUrl,
      questions: quiz.questions.map((question) => {
        return {
          id: question._id,
          question: question.question,
          answers: this.shaffleAnswers(question.answers),
        };
      }),
    };
    return noCorrectAnswers;
  }

  public shaffleAnswers(answers: string[]) {
    return answers.sort(() => Math.random() - 0.5);
  }

  public async getQuizAnswers(id: string) {
    const quiz = await this.quiz.getQuiz(id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    return quiz.questions.map((question) => {
      return {
        id: question._id,
        question: question.question,
        answers: question.answers,
        correctAnswer: question.correctAnswer,
      };
    });
  }
}

export default QuizService;
