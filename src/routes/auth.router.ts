import express from 'express';
import AuthController from '../controllers/auth.controller';
import AuthService from '../services/auth.service';

const router = express.Router();

const controller = new AuthController(new AuthService());

router.post('/register', controller.createUser.bind(controller));

export default router;
