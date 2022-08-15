import { Schema } from 'mongoose';

import { modelMixIn } from '../utils/mixins';

import { TQuizQuestion, TQuiz } from '../types/types';

const quizQuestionsArraySchema = new Schema<TQuizQuestion>({
  question: { type: String, require: true },
  answers: { type: [String], require: true },
  correctAnswerIndex: { type: Number, require: true },
});

const quizSchema = new Schema<TQuiz>(
  {
    category: { type: String, required: true },
    quizName: { type: String, required: true },
    description: { type: String, required: true },
    cardImageUrl: { type: String, required: true },
    questions: [quizQuestionsArraySchema],
  },
  { versionKey: false, timestamps: true }
);

export class Quiz extends modelMixIn<TQuiz>('quiz', quizSchema) {
  async getQuizzes() {
    return this.model.find({});
  }

  async getQuiz(id: string) {
    return this.model.findById(id);
  }

  async getAnswers(_id: string) {
    return this.model.findOne({ _id });
  }
}
