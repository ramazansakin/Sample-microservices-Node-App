const express = require('express')
const bodyParser = require('body-parser')
const cote = require('cote')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

const restaurantService = new cote.Requester({ name: 'restaurant service', key: 'restaurants' })

const orderService = new cote.Requester({ name: 'order service', key: 'orders' })

const deliveryService = new cote.Requester({ name: 'delivery service', key: 'deliveries' })

// # Here you can bind customer service to api-gateway service here like other services
// And if you wanna to seperate the service and db, you can change other services like customer service
  
//const customerService = new cote.Requester({ name: 'customer service', key: 'customers' })
//
//app.get('/customers', async (req, res) => {
//    const customers = await customerService.send({ type: 'list' })
//    res.send(customers);
//})

app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantService.send({ type: 'list' })
    res.send(restaurants);
})

app.get('/orders', async (req, res) => {
    const orders = await orderService.send({ type: 'list' })
    res.send(orders);
})

app.get('/deliveries', async (req, res) => {
    const deliveries = await deliveryService.send({ type: 'list' })
    res.send(deliveries);
})

app.post('/order', async (req, res) => {
    const order = await orderService.send({ type: 'create order', order: req.body })
    const delivery = await deliveryService.send({ type: 'create delivery', order })

    res.send({ order, delivery })
})

app.listen(3000, () => console.log('listening'))
