//server side script
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(__dirname))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies true or false both work.
  extended: false
})); 

const messages = [
    
]

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.post('/messages', function (req, res) {
  
  console.log(req.body)
  messages.push(req.body)
  console.log(messages)
  res.sendStatus(200)
})

const server = app.listen(3000 , () => {
    console.log('node server listening on port ',server.address().port)
});