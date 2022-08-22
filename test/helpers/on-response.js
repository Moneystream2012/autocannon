module.exports = (status, body, context) => {
  if (status === 200) {
    context.ticketId = JSON.parse(body).ticket;
  } // on error, you may abort the benchmark
}