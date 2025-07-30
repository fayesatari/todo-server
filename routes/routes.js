import express from 'express';
import { getHi } from '../controllers/baseController.js';
import todoController from '../controllers/todoController.js'

const router = express.Router();


router.get('/hi', getHi);
router.get('/', getHi);
router.get('/todo',todoController.gettodos);
router.get('/todo/add/:var',todoController.gettodoadd);


export default router;