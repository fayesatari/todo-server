import express from 'express';
import { getHi } from '../controllers/baseController.js';

const router = express.Router();


router.get('/hi', getHi);
router.get('/', getHi);


export default router;