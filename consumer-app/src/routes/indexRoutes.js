import { Router } from 'express';

import consumerRoute from './consumerRoute.js';

const router = Router();

/*------------------*/
router.use('/consumer', consumerRoute);

/*
*-----------------------------
*/
export default router;
