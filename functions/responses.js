function handleRequest (context, req) {
  context.bindings.outputBlob = req.body

  context.done()
}

module.exports = handleRequest
