function handleRequest (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  context.bindings.outputBlob = req.body

  if (req.body) {
    context.res = {
      body: req.body
    }
  } else {
    context.res = {
      status: 400,
      body: ''
    }
  }

  context.done()
}

module.exports = handleRequest
