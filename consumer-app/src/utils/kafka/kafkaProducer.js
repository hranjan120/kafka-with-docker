import { v4 as uuidv4 } from 'uuid';
import kafkaConnection from './kafkaConnection.js';

/*---------------------*/
const kafkaProducer = async (topicName, data) => {
    try {
        data.msgUniqueId = uuidv4();
        data.msgTimeStamp = Math.floor(Date.now() / 1000);
        const kafkaProducr = kafkaConnection.producer({
            allowAutoTopicCreation: true,
            transactionTimeout: 30000,
        });
        kafkaProducr.on('producer.connect', () => {
            console.log('KafkaProvider: connected');
        });
        await kafkaProducr.connect();
        await kafkaProducr.send({
            topic: topicName,
            messages: [{
                value: JSON.stringify(data),
            }],
        });
        return true;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default kafkaProducer;
