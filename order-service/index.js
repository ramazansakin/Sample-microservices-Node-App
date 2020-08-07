const cote = require('cote')

const orderService = new cote.Responder({ name: 'order responder', key: 'orders' })
orderService.on('*', req => req.type && console.log(req))

const orders = []
let idCounter = 0

orderService.on('create order', req => {
    const order = { id: idCounter++, ...req.order, status: 'preparing' }

    orders.push(order)
    return Promise.resolve(order)
})

orderService.on('list', req => Promise.resolve(orders))
