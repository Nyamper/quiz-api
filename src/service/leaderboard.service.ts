import { Leaderboard } from '../models/leaderboard.model';
import { TLeaderboard } from '../types/types';

class LeaderboardService {
  constructor(private leaderboard: Leaderboard = new Leaderboard()) {}
  public async addUserToLeadderboard(params: TLeaderboard) {
    const leaderBoard = new this.leaderboard.model(params);
    await leaderBoard.save();
    return leaderBoard;
  }
  public async getLeaderboard() {
    return this.leaderboard.model.find({});
  }
}
export default LeaderboardService;
