import { sendEventToKafka } from '../services/eventService.js';

/*
*------------------------------
*/
export const sampleEvent = async (req, res, next) => {
    try {
        sendEventToKafka('SAMPLE-TOPIC', req.body);
        res.status(200).json({
            statusText: 'OK',
            statusValue: 200,
            message: 'Sample event publishd to Kafka 😐',
            payload: {},
        });
    } catch (error) {
        next();
    }
};
