const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const cors = require('cors')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/postRoutes')
const characterRoutes = require('./routes/characterRoutes')


//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())



//get routes
app.get('/', (req, res) => {
  process.env.NODE_ENV !== 'production' ?
  res.json({
    posts: `http://localhost:${port}/posts`,
  }) :
  res.json({
    posts: `deployed link`,
  })
})

app.use('/posts', postRoutes)
app.use('/characters', characterRoutes)

//error handling
app.use(notFound)
app.use(errorHandler)

function notFound(err, req, res, next) {
res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({
      error: err.message,
      stack,
    url: req.originalUrl 
  })
}


app.listen(port, () => {console.log(`Up on port ${port}`)})