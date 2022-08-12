export type TUser = {
  _id?: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
};

export type TUserInput = {
  username: string;
  password: string;
};

export type TQuizQuestion = {
  _id?: string;
  question: string;
  answers: Array<string>;
  correctAnswerIndex: number;
};

export type TQuiz = {
  _id?: string;
  category: string;
  quizName: string;
  description: string;
  cardImageUrl: string;
  questions: Array<TQuizQuestion>;
};
