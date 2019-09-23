const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const apolloServer = require('./apollo')

const port = 8888

const app = new Koa()
const router = new Router()

app.use(bodyParser())

// Add routes
fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  require('./routes/' + file)(router)
})

app.use(router.routes())

apolloServer.applyMiddleware({ app })

app.listen(port)

console.log('API running on port ' + port + '. Graphql on: ' + apolloServer.graphqlPath)
