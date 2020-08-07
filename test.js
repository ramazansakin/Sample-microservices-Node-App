const axios = require('axios')

async function main() {
  
  // Get all restaurants
  const restaurants = await axios.get('http://localhost:3000/restaurants')
  console.log(restaurants.data)

  // Order a test meal
  const orderRequest = {
    restaurantId: 1,
    menuId: 2,
    address: 'Sample Address infos'
  }

  const order = await axios.post('http://localhost:3000/order', orderRequest)
  console.log(order.data)


  // Order a test meal 2
  const orderRequest2 = {
    restaurantId: 2,
    menuId: 1,
    address: 'Sample Address infos 2'
  }

  const order2 = await axios.post('http://localhost:3000/order', orderRequest2)
  console.log(order2.data)

  // Get all deliveries
  const deliveries = await axios.get('http://localhost:3000/deliveries')
  console.log(deliveries.data)

  // Get all orders
  const orders = await axios.get('http://localhost:3000/orders')
  console.log(orders.data)

}

main()
