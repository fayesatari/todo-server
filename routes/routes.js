import express from 'express';
import { getHi } from '../controllers/baseController.js';
import todoController from '../controllers/todoController.js'

const router = express.Router();


router.get('/hi', getHi);
router.get('/', getHi);
router.get('/todos',todoController.gettodos);
router.get('/todoadd',todoController.gettodoadd);


export default router;