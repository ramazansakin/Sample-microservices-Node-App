const cote = require('cote')

const restaurantsResponder = new cote.Responder({ name: 'restaurants responder', key: 'restaurants' })
restaurantsResponder.on('*', req => req.type && console.log(req))

const restaurants = [
	{
		id: 1,
		name: 'Italian Restaurant',
		menu: [{
			id: 1,
			name: 'Pizza',
			price: 14
		}, {
			id: 2,
			name: 'Pasta',
			price: 12
		}]
	}, {
		id: 2,
		name: 'Turkish Restaurant',
		menu: [{
			id: 1,
			name: 'Kebap',
			price: 15
		}, {
			id: 2,
			name: 'Baklava',
			price: 20
		}]
	}, {
		id: 3,
		name: 'American Restaurant',
		menu: [{
			id: 1,
			name: 'Hamburger',
			price: 10
		}, {
			id: 2,
			name: 'Hot dog',
			price: 10
		}]
	}
]

restaurantsResponder.on(req => req.type && console.log(req))

restaurantsResponder.on('list', req => Promise.resolve(restaurants))
