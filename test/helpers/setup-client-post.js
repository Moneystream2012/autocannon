'use strict'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = (client) => (
  client.setBody( JSON.stringify({
    number: getRandomInt(10, 39),
  }))
)
