const cote = require('cote')

const deliveryService = new cote.Responder({ name: 'delivery responder', key: 'deliveries' })
deliveryService.on('*', req => req.type && console.log(req))    // on every request

const deliveries = []
let idCounter = 0

deliveryService.on('create delivery', req => {
    const delivery = { id: idCounter++, orderId: req.order.id, eta: 30, status: 'pending' }

    deliveries.push(delivery)
    return Promise.resolve(delivery)
})

deliveryService.on('list', req => Promise.resolve(deliveries))
