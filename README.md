# Kafka With Docker and Express Js (Consumer and Producer Service) #

This repo Having Two express js application (Producer and Consumer).

# Getting started

To get the application running locally:

- Clone this repo
- Start Docker desktop
- `docker compose up` to start the local Kafka Server, Kafka UI and Both the Express Application
- Consumer App will start on port ```8000```
- Producer App will start on port ```8001```

### How to Produce Events to Kafka Topic ? ###

* Create the topic by uncommenting topic creation code from kafkaconsumer.js file of Consumer App
* To produce the Sample Event, url will be```http://localhost:8001/producer/v1/sample-event```
* Payload `{
    "name": "User Name",
    "age": 100,
    "id": "123456"
}`
* That's It, You can see the payload in Terminal