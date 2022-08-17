import { Quiz } from '../models/quiz.model';
import { TQuiz } from '../types/types';

// type TCheck = {
//   id: string;
//   answers: [string];
// };

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
    return {
      category: quiz.category,
      quiz: quiz.quizName,
      id: quiz._id,
      description: quiz.description,
      cardImageUrl: quiz.cardImageUrl,
      questions: quiz.questions.map((question) => {
        return {
          _id: question._id,
          question: question.question,
          answers: question.answers,
        };
      }),
    };
  }

  public async getQuizAnswers(id: string) {
    const quiz = await this.quiz.getQuiz(id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    return {
      questions: quiz.questions.map((question) => {
        return {
          _id: question._id,
          question: question.question,
          answers: question.answers,
          correctAnswerIndex: question.correctAnswerIndex,
        };
      }),
    };
  }

  // public async checkAnswers(params: TCheck) {
  //   const quiz = await this.quiz.getQuiz(params.id);
  //   if (!quiz) {
  //     return 'Quiz not found';
  //   }
  //   const answers = params.answers.map((answer, index) => {
  //     return {
  //       answer,
  //       correct: quiz.questions[index].correctAnswerIndex === index,
  //     };
  //   });
  //   return {
  //     answers,
  //     correct: answers.filter((answer) => answer.correct).length,
  //     total: answers.length,
  //   };
  // }
}

export default QuizService;
