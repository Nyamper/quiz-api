import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

class UserController {
  constructor(private authService: AuthService) {}
  async createUser(req: Request, res: Response) {
    try {
      const user = await this.authService.registerUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'error' });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const user = await this.authService.loginUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'error' });
    }
  }
  async logoutUser(req: Request, res: Response) {
    try {
      const user = await this.authService.logoutUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'error' });
    }
  }
}

export default UserController;
