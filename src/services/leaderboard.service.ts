import { Leaderboard } from '../models/leaderboard.model';
import { Quiz } from '../models/quiz.model';
import { TLeaderboard, TLeaderBoardPartial } from '../types/types';

class LeaderboardService {
  constructor(
    private leaderboard: Leaderboard = new Leaderboard(),
    private quiz: Quiz = new Quiz()
  ) {}
  public async addUserToLeadderboard(params: TLeaderBoardPartial) {
    const quiz = await this.quiz.getQuiz(params.id);
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    const leaderBoard = new this.leaderboard.model({
      username: params.username,
      category: quiz.category,
      quizName: quiz.quizName,
      time: params.spentTime,
    });

    await leaderBoard.save();
    return leaderBoard;
  }

  public async getLeaderboard() {
    const leaderboard = this.leaderboard.model.find({});
    return leaderboard.sort({ time: 1 });
  }
}
export default LeaderboardService;
