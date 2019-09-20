const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const config = require('../src/config')

const port = 8888

const app = new Koa()
const router = new Router()

if (config.NODE_ENV !== 'production') {
  const whitelist = ['http://localhost:1234']
  const checkOriginAgainstWhitelist = ctx => {
    const requestOrigin = ctx.accept.headers.origin
    if (!whitelist.includes(requestOrigin)) {
      ctx.status = 401
      return
    }
    return requestOrigin
  }
  app.use(
    cors({
      origin: checkOriginAgainstWhitelist,
      credentials: true
    })
  )
}

app.use(bodyParser())

// Add routes
fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  require('./routes/' + file)(router)
})

app.use(router.routes())

app.listen(port)

console.log('API running on port ' + port)
