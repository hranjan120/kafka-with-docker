import { Router } from 'express';

import * as consumerController from '../controllers/consumerController.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.get('/v1/sample-route', consumerController.sampleRoute);

/*
*-----------------------------
*/
export default router;
