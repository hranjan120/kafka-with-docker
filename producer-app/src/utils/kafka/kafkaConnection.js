import { Kafka } from 'kafkajs';

/*----------------------*/
//const KAFKA_URL="b-1.utilsdocumentmsk.qwerty.c4.kafka.ap-south-1.amazonaws.com:9092,b-2.utilsdocumentmsk.qwerty.c4.kafka.ap-south-1.amazonaws.com:9092,b-3.utilsdocumentmsk.qwerty.c4.kafka.ap-south-1.amazonaws.com:9092"
// const KAFKA_URL="localhost:9092,localhost:9093,localhost:9094";
const KAFKA_URL="kafka-1:19092,kafka-2:19093,kafka-3:19094";

const kafkaConnection = new Kafka({
    clientId: 'producer-service-node-kafka-client',
    brokers: KAFKA_URL.split(','),
    // ssl: false,
    // sasl: {
    //     mechanism: 'SCRAM-SHA-256',
    //     username: 'kafka-admin',
    //     password: 'kafkab@123edj',
    // },
});

export default kafkaConnection;
