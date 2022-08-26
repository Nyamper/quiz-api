import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import { z } from 'zod';

const leaderboardSchema = z.object({
  id: z.string(),
  spentTime: z.number(),
  username: z.string(),
});

class LeaderboardController {
  constructor(private leaderboardService: LeaderboardService) {}
  public async addUserToLeadderboard(req: Request, res: Response) {
    try {
      await leaderboardSchema.parse(req.body);
      const leaderboard = await this.leaderboardService.addUserToLeadderboard(
        req.body
      );
      return res.status(200).json(leaderboard);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }

  public async getLeaderboard(req: Request, res: Response) {
    try {
      const leaderboard = await this.leaderboardService.getLeaderboard();
      return res.status(200).json(leaderboard);
    } catch (error) {
      return res.status(400).json({ message: 'error' });
    }
  }
}

export default LeaderboardController;
