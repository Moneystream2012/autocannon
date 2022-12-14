'use strict'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = (req, context) => ({
  ...req,
  body: JSON.stringify({
    number: getRandomInt(2, 12),
  }),
})
