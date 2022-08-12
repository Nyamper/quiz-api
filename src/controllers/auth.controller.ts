import { Request, Response } from 'express';
import AuthService from '../service/auth.service';

class UserController {
  constructor(private authService: AuthService) {}
  async createUser(req: Request, res: Response) {
    try {
      //create new user

      const user = await this.authService.registerUser(req.body);

      return user;
    } catch (error: any) {
      console.log('controller ', error);
    }
  }
}

export default UserController;
