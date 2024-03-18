import { Router } from 'express';

import producerRoute from './producerRoute.js';

const router = Router();

/*------------------*/
router.use('/producer', producerRoute);

/*
*-----------------------------
*/
export default router;
