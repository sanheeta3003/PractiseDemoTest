const express = require('express')

const products = [
  { id: 1, title: 'product 1', description: 'this is product 1', price: 100 },
  { id: 2, title: 'product 2', description: 'this is product 2', price: 200 },
  { id: 3, title: 'product 3', description: 'this is product 3', price: 300 },
  { id: 4, title: 'product 4', description: 'this is product 4', price: 400 },
  { id: 5, title: 'product 5', description: 'this is product 5', price: 500 }
]

// create an express application
const app = express()

app.get('/', (request, response) => {
  response.end("<h1>My REST APIs</h1>")
})

app.get('/product', (request, response) => {

  // change the content type
  response.setHeader('Content-Type', 'application/json')

  // convert the JSON array to string
  response.end(JSON.stringify(products))
})

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})