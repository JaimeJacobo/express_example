const express = require('express')
const chalk = require('chalk')

const app = express()

const items = [
  {
    name: 'book',
    price: 15,
    currency: 'EUR',
    id: 3576
  },
  {
    name: 'phone',
    price: 999,
    currency: 'EUR',
    id: 8894
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2378
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2098
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 3348
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id:3347  
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 3346
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 3345
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2246
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2243
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2244
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2221
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2222
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id:2233  
  },
  {
    name: 'headphones',
    price: 150,
    currency: 'USD',
    id: 2234
  }
]

app.get('/resources', (request, response)=>{


  const currency = request.query.currency
  const limit = request.query.limit ? request.query.limit : 10

  const filteredItemsByCurrency = currency ? items.filter((item)=>item.currency === currency.toUpperCase()) : items

  response.send(filteredItemsByCurrency.splice(0, limit))
})

app.get('/resources/:id', (request, response)=>{
  const selectedItem = items.find((item)=>request.params.id === (item.id).toString())
  response.send(selectedItem ? selectedItem : {message: 'This item does not exist'})
})

app.listen(5001, ()=>{
  console.log(chalk.green.inverse('Server listening in port 5001'))
})


