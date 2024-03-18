import kafkaConnection from './kafkaConnection.js';

/*---------------------*/
const initKafkaConsumer = async () => {
    try {
        console.log('Kafka initialize successfully');
        const consumer = kafkaConnection.consumer({ groupId: 'kafka-producer-app-gp' });
        await consumer.connect();
        await consumer.subscribe({ topics: ['SAMPLE-TOPIC'], fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, message }) => {
                console.log('----Inside Kafka consumer----');
                const payloadData = JSON.parse(message.value.toString());
                console.log(payloadData);
            },
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default initKafkaConsumer;
