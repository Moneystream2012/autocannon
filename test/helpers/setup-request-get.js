module.exports = (req, context) => {
  console.log('>>>>> ' + context.ticketId);
  req.body = JSON.stringify({
    ticket: context.ticketId,
  });
  return req
}
