const faker = require('faker')

const items = Array.from(Array(20).keys()).map(() => ({
  id: faker.random.uuid(),
  name: faker.system.fileName(),
  type: faker.system.fileExt(),
  x: Math.floor(Math.random() * 1000),
  y: Math.floor(Math.random() * 1000)
}))

module.exports = items
