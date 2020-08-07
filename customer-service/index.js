const cote = require('cote')

const customerService = new cote.Responder({ name: 'customer responder', key: 'customers' })
customerService.on('*', req => req.type && console.log(req))    // on every request

const customers = []
let idCounter = 0

customerService.on('create customer', req => {
    const customer = { id: idCounter++, username: req.username, orderId : req.orderId  }

    deliveries.push(customer)
    return Promise.resolve(customer)
})

customerService.on('list', req => Promise.resolve(customers))
