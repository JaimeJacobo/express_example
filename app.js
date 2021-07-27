
const express = require('express')

const app = express()

const users = [
  {username: 'jaimejacobo', password: 'hola', id: 67},
  {username: 'pedropiedras', password: 'hello', id: 17},
  {username: 'mariarojas', password: 'bye', id: 20}
]

app.get('/', (request, response)=>{
  response.send('Welcome to our first server!')
})

app.get('/contacts', (request, response)=>{
  response.send('Conctacts page')
})

app.get('/users/:id', (request, response)=>{

  const pickedUser = users.find((user)=>request.params.id == user.id)

  pickedUser ? response.send(pickedUser) : response.send('User not found')

})

app.listen(5000, ()=>{
  console.log('Server set up at PORT 5000')
})

// GET request: asks for information  

// POST request: sends information to create something
// UPDATE/PUT request: sends information that wants to be updated
// REMOVE/DELETE request: sends information that wants to be deleted


