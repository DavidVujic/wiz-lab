function handleTrigger (context, blob) {
  context.log(blob.raw)

  context.log(new Date(blob.timestamp).toLocaleString())
  context.log(new Date().toLocaleString())

  context.done()
}

module.exports = handleTrigger
