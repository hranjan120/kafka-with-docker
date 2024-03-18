import { Router } from 'express';

import * as producerController from '../controllers/producerController.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.post('/v1/sample-event', producerController.sampleEvent);

/*
*-----------------------------
*/
export default router;
