'use strict'

module.exports = (req, context) => {
  req.body = JSON.stringify({
    ticket: context.ticketId,
  });
  return req
}
