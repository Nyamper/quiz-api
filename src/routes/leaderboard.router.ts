import express from 'express';

import LeaderboardController from '../controllers/leaderboard.controller';
import LeaderboardService from '../service/leaderboard.service';

const router = express.Router();

const leaderboardController = new LeaderboardController(
  new LeaderboardService()
);

router.post(
  '/',
  leaderboardController.addUserToLeadderboard.bind(leaderboardController)
);
router.get(
  '/',
  leaderboardController.getLeaderboard.bind(leaderboardController)
);

export default router;
