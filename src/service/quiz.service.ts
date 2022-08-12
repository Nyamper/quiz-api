import { Quiz } from '../models/quiz.model';
import { TQuiz } from '../types/types';

class QuizService {
  constructor(private quiz: Quiz = new Quiz()) {}
  public async addQuiz(params: TQuiz) {
    // check if quiz exist
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
    const data = this.quiz.model.findById(id);
    console.log(data);
    return data;
  }
}

export default QuizService;
