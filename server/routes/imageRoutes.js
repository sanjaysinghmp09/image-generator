import express from 'express';
import { generateImage } from '../controllers/imageController';
import userAuth from '../middlewares/userAuth';

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth, generateImage);

export default imageRouter;
