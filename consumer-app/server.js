import app from './app.js';
import initKafkaConsumer from './src/utils/kafka/kafkaConsumer.js';

/* **********************************************
*----------------Init Kafka Consumer-------------
*********************************************** */
(async () => {
  await initKafkaConsumer();
})();

/*
*-------------------------------------------------
*/
const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port} Consumer app`);
  console.log(`App is on: ${app.get('env')} Mode`);
});

process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----');
  console.log(error);
  console.log(origin);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----');
  console.log(promise);
  console.log(reason.stack);
});
