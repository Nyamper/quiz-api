import express from 'express';
import AuthController from '../controllers/auth.controller';
import AuthService from '../services/auth.service';

import isAuthMiddleware from '../middlewares/isAuth.middleware';

const router = express.Router();

const controller = new AuthController(new AuthService());

router.post('/register', controller.createUser.bind(controller));
router.post('/login', controller.loginUser.bind(controller));
router.get('/logout', isAuthMiddleware, controller.logoutUser.bind(controller));

export default router;
