# Microservices with Node.js and Dockerizing

Sample microservices implementation with Node.js and Dockerizing&composing all services. Also app shows how 
you bind api on gateway or create seperated microservices via seperated databases such as customer-service.
You can check out the customer-service and also ather gateway-services and determine which architecture is good
for you, you can develop others. Other services has not all crud ops, but easy to develop as you can see. These
are just samples to show usages, not a complete project :). Thanks

## Requirements

Make sure you have the latest Docker and docker-compose installed.

## Setup

You can clone this repository here:

```
git clone git@github.com:ramazansakin/Sample-microservices-Node-App.git
```

## App Quickstart

### Start all services

```
docker-compose up
```

### Stop all services

```
docker-compose down
```

This runs the app and any changes to the microservices will live-reload.

### Test example requests

```
node test.js
```
