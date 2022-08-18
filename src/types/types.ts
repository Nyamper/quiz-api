export type TUser = {
  _id?: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
};

export type TLeaderboard = {
  _id?: string;
  username: string;
  category: string;
  quizName: string;
  time: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TUserInput = {
  username: string;
  password: string;
};

export type TQuizQuestion = {
  _id?: string;
  question: string;
  answers: Array<string>;
  correctAnswer?: string;
};

export type TQuiz = {
  _id?: string;
  category: string;
  quizName: string;
  description: string;
  cardImageUrl: string;
  questions: Array<TQuizQuestion>;
};

export type Context = {
  token?: string;
  user?: TUser;
  // user?: User;
};
