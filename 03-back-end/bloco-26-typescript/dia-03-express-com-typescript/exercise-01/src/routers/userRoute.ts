import { Router } from 'express';

import userController from '../controllers/userController';
import userMiddleware from '../middleware/userMiddleware';

const router = Router();

router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userMiddleware, userController.create);
router.put('/:id', userMiddleware, userController.update);
router.delete('/:id', userController.remove);

export default router;