import kafkaConnection from './kafkaConnection.js';

/*---------------------*/
const initKafkaConsumer = async () => {
    try {
        // const admin = kafkaConnection.admin();
        // await admin.createTopics({
        //     topics: [{ topic: 'SAMPLE-TOPIC', numPartitions: 1, replicationFactor: 1 }],
        // });
        // const topicList = await admin.listTopics();
        // console.log(topicList);

        console.log('Kafka initialize successfully');
        const consumer = kafkaConnection.consumer({ groupId: 'kafka-consumer-app-gp' });
        await consumer.connect();
        await consumer.subscribe({ topics: ['SAMPLE-TOPIC'], fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, message }) => {
                console.log('----Inside Kafka consumer----', topic);
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
