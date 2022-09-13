import { Router } from 'express';

import PostController from '../controllers/postController';
import postMiddleware from '../middleware/postMiddleware';

const router = Router();

const postController = new PostController();

router.get('/', postController.getAll);
router.get('/search', postController.filterByText);
router.get('/:id', postController.getById);
router.post('/', postMiddleware, postController.create);
router.put('/:id', postMiddleware, postController.update);
router.delete('/:id', postController.remove);

export default router;
