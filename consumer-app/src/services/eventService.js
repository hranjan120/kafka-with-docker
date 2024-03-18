import kafkaProducer from '../utils/kafka/kafkaProducer.js';

/*
*-------------------------
*/
export const sendEventToKafka = async (topic, data) => {
    kafkaProducer(topic, data);
    return true;
};
